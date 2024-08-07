import { Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ProvasSimuladosComponent } from './views/provas-simulados/provas-simulados.component';
import { AlunosComponent } from './views/alunos/alunos.component';
import { TurmasComponent } from './views/turmas/turmas.component';
import { ProfessoresComponent } from './views/professores/professores.component';
import { ModulosTemasComponent } from './views/modulos-temas/modulos-temas.component';
import { QuestoesComponent } from './views/questoes/questoes.component';
import { HistoricosComponent } from './views/historicos/historicos.component';
import { AdicionarProvaSimuladoComponent } from './views/adicionar-prova-simulado/adicionar-prova-simulado.component';
import { PreTesteComponent } from './views/pre-teste/pre-teste.component';
import { MainComponent } from './views/main/main.component';
import { HistoricoAlunoComponent } from './views/historico-aluno/historico-aluno.component';
import { ProvasRealizadasComponent } from './views/provas-realizadas/provas-realizadas.component';
import { ResultadoProvaComponent } from './views/resultado-prova/resultado-prova.component';
import { SimuladosRealizadosComponent } from './views/simulados-realizados/simulados-realizados.component';
import { ResultadoSimuladoComponent } from './views/resultado-simulado/resultado-simulado.component';
import { RegistrarProfessorComponent } from './views/registrar-professor/registrar-professor.component';
import { PerfilProfessorComponent } from './views/perfil-professor/perfil-professor.component';

export const routes: Routes = [
    {
        path: "", component: MainComponent,
        children: [
            { path: "", component: DashboardComponent },
            { path: "dashboard", component: DashboardComponent },
            { path: "provas-simulados", component: ProvasSimuladosComponent },
            { path: "alunos", component: AlunosComponent },
            { path: "turmas", component: TurmasComponent },
            { path: "professores", component: ProfessoresComponent },
            { path: "modulos-tema", component: ModulosTemasComponent },
            { path: "enunciados", component: QuestoesComponent },
            { path: "historico", component: HistoricosComponent },
            { path: "adicionar", component: AdicionarProvaSimuladoComponent },
            { path: "provas-realizadas", component: ProvasRealizadasComponent },
            { path: "resultado-prova", component: ResultadoProvaComponent }, 
            { path: "simulados-realizados", component: SimuladosRealizadosComponent }, 
            { path: "resultado-simulado", component: ResultadoSimuladoComponent }, 
            { path: "registrar-professor", component: RegistrarProfessorComponent }, 
            { path: "perfil-professor", component: PerfilProfessorComponent }, 
        ]
    },

    { path: "pre-teste", component: PreTesteComponent },
    { path: "historico-aluno", component: HistoricoAlunoComponent }

];
