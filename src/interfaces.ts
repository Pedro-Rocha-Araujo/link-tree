import { TipoAlias } from "./app/admin/[id_usuario]/gerenciar-links/page";

export interface LinkInterface {
  id: string,
  caminho: string,
  tipo: TipoAlias,
  id_usuario: string
}

export interface UsuarioInterface {
  id: string,
  nome: string,
  id_usuario: string
}