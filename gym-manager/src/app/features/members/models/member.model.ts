export interface Member {
   id: number;
   nome: string;
   valorMensalidade: number;
   dataUltimoPgto: Date | string;
   dataInclusaoSistema: Date | string;
}