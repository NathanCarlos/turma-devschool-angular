export interface Member {
   id: number;
   nome: string;
   email: string;
   senha: string;
   valorMensalidade: number;
   dataUltimoPgto: Date | string;
   dataInclusaoSistema: Date | string;
}