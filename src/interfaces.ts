import { TipoAlias } from "./app/admin/[id_usuario]/gerenciar-links/page";

export interface LinkInterface {
  caminho: string,
  tipo: TipoAlias,
  id_usuario: string
}