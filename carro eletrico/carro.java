public class CarroEletrico {
    // Atributos privados
    private String modelo;
    private int velocidadeAtual;
    private int cargaBateria;

    // Construtor
    public CarroEletrico(String modelo) {
        this.modelo = modelo;
        this.velocidadeAtual = 0;
        this.cargaBateria = 100;
    }

    // Métodos de Negócio
    public void acelerar() {
        if (cargaBateria <= 0) {
            System.out.println("Erro: Bateria descarregada! Não é possível acelerar.");
            return;
        }
        if (velocidadeAtual >= 120) {
            System.out.println("Erro: Velocidade máxima de 120 km/h já atingida.");
            return;
        }

        this.velocidadeAtual += 20;
        this.cargaBateria -= 5;
        System.out.println(modelo + " acelerou. Vel: " + velocidadeAtual + " km/h | Bat: " + cargaBateria + "%");
    }

    public void frear() {
        if (velocidadeAtual <= 0) {
            System.out.println("O carro já está totalmente parado.");
            return;
        }

        this.velocidadeAtual -= 20;
        System.out.println(modelo + " freou. Vel: " + velocidadeAtual + " km/h | Bat: " + cargaBateria + "%");
    }

    public void carregarBateria() {
        if (velocidadeAtual > 0) {
            System.out.println("Erro de Segurança: Não é possível carregar a bateria com o carro em movimento!");
            return;
        }

        this.cargaBateria = 100;
        System.out.println("Bateria totalmente carregada (100%) com sucesso!");
    }

    // Getters e Setters
    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public int getVelocidadeAtual() {
        return velocidadeAtual;
    }

    public int getCargaBateria() {
        return cargaBateria;
    }
}
