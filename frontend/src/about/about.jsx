import React from 'react';
import PageHeader from '../template/pageHeader';
import Card from '../template/card';

export default function (props) {
    return (
        <div className="about">
            <PageHeader
                name="Sobre"
                small="Gerenciador de Tarefas"
            ></PageHeader>

            <div className="cards">
                <Card color1>
                    <p>Aplicação criada para otimizar seu dia.</p>
                </Card>
                <Card color2>
                    <p>
                        Agora você não precisa ficar tentando lembrar todos seus
                        afazeres.
                    </p>
                </Card>
                <Card color3>
                    <p>
                        Anote suas reuniões, consultas médicas, seus lembrentes
                        do dia, marque as tarefas concluídas, faça busca de uma
                        tarefa específica e as remova quando quiser.
                    </p>
                </Card>
            </div>
        </div>
    );
}
