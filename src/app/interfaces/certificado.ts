// Você está definindo um tipo (contrato) chamado Certificado
// Ou seja:“Todo objeto do tipo Certificado deve ter essas propriedades”

export interface Certificado {
    id: string;
    nome: string;
    atividades: string[];
    dataEmissao: string;
}