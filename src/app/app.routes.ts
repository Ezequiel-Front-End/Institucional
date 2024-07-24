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

export const routes: Routes = [
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
    { path: "pre-teste", component: PreTesteComponent }
];
