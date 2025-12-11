import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { apiClient } from '@/lib/axios';
import { type Del } from '@/types/domainTypes';

export const useDelList = () => {
  /*return useQuery<Del[]>({
    queryKey: ['delList'],
    queryFn: async () => {
      const response = await apiClient.get('/api/del');
      return response.data;
    },
  });*/

  // Marca el tiempo desde que este hook se ejecuta (para medir total hasta tener datos)
  const startRef = useRef<number | null>(null);
  if (startRef.current === null) {
    startRef.current = performance.now();
  }

  const query = useQuery<Del[]>({
    queryKey: ['delList'],
    // Importante: así la 2ª vez usa caché sin pegar al backend
    staleTime: 1000 * 60 * 5, // 5 minutos

    queryFn: async () => {
      const start = performance.now(); // inicio medición de NETWORK

      const response = await apiClient.get('/api/del');

      const end = performance.now(); // fin medición de NETWORK
      console.log(`[useDelList] NETWORK fetch /api/del tog ${(end - start).toFixed(2)} ms`);

      return response.data;
    },
  });

  // Medimos cuánto tarda en haber datos "listos"
  // y decimos si vienen del BACKEND o de la CACHE
  useEffect(() => {
    if (query.status === 'success' && startRef.current !== null) {
      const end = performance.now();
      const source = query.isFetchedAfterMount ? 'BACKEND' : 'CACHE';

      console.log(
        `[useDelList] Data klar från ${source} på ${(end - startRef.current).toFixed(2)} ms`,
      );
    }
  }, [query.status, query.isFetchedAfterMount]);

  return query;
};

// ---- Mutations ----
// Inputs estrictos
type CreateDelInput = { kod: string; namn: string };
type UpdateDelInput = { id: number; kod: string; namn: string };

// Create
export const useDelCreate = () => {
  const qc = useQueryClient();
  return useMutation<Del, unknown, CreateDelInput>({
    mutationFn: async (data) => {
      const res = await apiClient.post<Del>('/api/del', data);
      return res.data;
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ['delList'] });
    },
  });
};

// Edit
export const useDelEdit = () => {
  const qc = useQueryClient();
  return useMutation<Del, unknown, UpdateDelInput>({
    mutationFn: async (data) => {
      const res = await apiClient.put<Del>(`/api/del/${data.id}`, {
        kod: data.kod,
        namn: data.namn,
      });
      return res.data;
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ['delList'] });
    },
  });
};

// Delete
export const useDelDelete = () => {
  const qc = useQueryClient();
  return useMutation<{ success: true }, unknown, number>({
    mutationFn: async (id) => {
      const res = await apiClient.delete<{ success: true }>(`/api/del/${id}`);
      return res.data;
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ['delList'] });
    },
  });
};
