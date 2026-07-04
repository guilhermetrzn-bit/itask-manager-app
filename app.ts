class Tarefa {
    id: number;
    titulo: string;
    descricao: string;
    dataCriacao: Date;
    concluida: boolean;
    onStatusChange: () => void; // Callback para avisar o App que mudou

    constructor(titulo: string, descricao: string, onStatusChange: () => void) {
        this.id = Date.now();
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataCriacao = new Date();
        this.concluida = false;
        this.onStatusChange = onStatusChange;
    }

    renderizar(): HTMLDivElement {
        const card = document.createElement('div');
        card.classList.add('task-card');
        if (this.concluida) {
            card.classList.add('completed');
        }

        const dataFormatada = this.dataCriacao.toLocaleString('pt-BR');

        card.innerHTML = `
            <div class="task-content">
                <input type="checkbox" class="task-checkbox" ${this.concluida ? 'checked' : ''}>
                <div class="task-text">
                    <h3>${this.titulo}</h3>
                    ${this.descricao ? `<p>${this.descricao}</p>` : ''}
                    <small>Criado em: ${dataFormatada}</small>
                </div>
            </div>
        `;

        // Captura o checkbox dentro do card criado
        const checkbox = card.querySelector('.task-checkbox') as HTMLInputElement;
        checkbox.addEventListener('change', () => {
            this.concluida = checkbox.checked; // Altera o status do objeto (POO)
            this.onStatusChange(); // Avisa o App para atualizar a tela
        });

        return card;
    }
}

class App {
    private tarefas: Tarefa[] = [];
    private form: HTMLFormElement;
    private listaElement: HTMLDivElement;

    constructor() {
        this.form = document.getElementById('task-form') as HTMLFormElement;
        this.listaElement = document.getElementById('tasks-list') as HTMLDivElement;
        this.escutarEventos();
    }

    private escutarEventos() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.adicionarTarefa();
        });
    }

    private adicionarTarefa() {
        const inputTitulo = document.getElementById('task-title') as HTMLInputElement;
        const inputDesc = document.getElementById('task-desc') as HTMLInputElement;

        if (!inputTitulo.value.trim()) return;

        // Passamos uma função que atualiza a tela sempre que o status mudar
        const novaTarefa = new Tarefa(inputTitulo.value, inputDesc.value, () => this.atualizarTela());
        
        this.tarefas.push(novaTarefa);
        this.atualizarTela();
        this.form.reset();
    }

    private atualizarTela() {
        this.listaElement.innerHTML = '';
        this.tarefas.forEach(tarefa => {
            const elementoHtml = tarefa.renderizar();
            this.listaElement.appendChild(elementoHtml);
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new App();
});