// Classe Carro com o atributo velocidade e métodos necessários
class Carro {
    private int velocidade; // Atributo encapsulado (boa prática)

    // Construtor para iniciar o carro parado
    public Carro() {
        this.velocidade = 0;
    }

    // Método solicitado pelo enunciado
    public void aumentarVelocidade(int incremento) {
        this.velocidade += incremento;
    }

    // Método para ler o valor da velocidade
    public int getVelocidade() {
        return this.velocidade;
    }
}

// Classe Moto com o atributo velocidade e métodos necessários
class Moto {
    private int velocidade; // Atributo encapsulado (boa prática)

    // Construtor para iniciar a moto parada
    public Moto() {
        this.velocidade = 0;
    }

    // Método solicitado pelo enunciado
    public void aumentarVelocidade(int incremento) {
        this.velocidade += incremento;
    }

    // Método para ler o valor da velocidade
    public int getVelocidade() {
        return this.velocidade;
    }
}

// Classe Principal que executa o programa
public class Main {
    public static void main(String[] args) {
        // 1. Instanciando os objetos
        Carro meuCarro = new Carro();
        Moto minhaMoto = new Moto();

        // 2. Chamando o método aumentarVelocidade para o Carro e para a Moto
        meuCarro.aumentarVelocidade(50);
        minhaMoto.aumentarVelocidade(40);

        // 3. Mostrando as velocidades resultantes na tela
        System.out.println("Velocidade atual do Carro: " + meuCarro.getVelocidade() + " km/h");
        System.out.println("Velocidade atual do Moto: " + minhaMoto.getVelocidade() + " km/h");
    }
}