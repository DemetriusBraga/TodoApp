import React from 'react';
import PageHeader from '../template/pageHeader';

export default function (props) {
    return (
        <div>
            <PageHeader name="Sobre"></PageHeader>

            <h2>Gerenciador de Tarefas</h2>
            <p>
                Aplicação criada para otimizar seu dia. <br />
                Agora você não precisa ficar tentando lembrar o que faltava
                fazer. <br />
                Anote suas reuniões, consultas médicas, seus lembrentes do dia,
                marque as tarefas concluídas e as remova quando quiser.
            </p>
        </div>
    );
}
