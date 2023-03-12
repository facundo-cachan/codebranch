export interface At {
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
}
export type Response = {
  status: number;
  message?: string;
  data: object;
};
export interface Task extends At {
  id: number
  text: string
  completed: boolean
}
