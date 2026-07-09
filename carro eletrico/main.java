public class Main {
    public static void main(String[] args) {
        // Instancia o carro elétrico
        CarroEletrico meuCarro = new CarroEletrico("Tesla Model Y");
        System.out.println("=== Iniciando Simulação com o " + meuCarro.getModelo() + " ===");

        // 1. Testando limite de velocidade máxima (120 km/h)
        System.out.println("\n--- Testando aceleração até o limite de velocidade ---");
        for (int i = 0; i < 7; i++) {
            meuCarro.acelerar();
        }

        // 2. Tentando carregar o carro em movimento (Deve gerar erro)
        System.out.println("\n--- Tentando carregar em movimento ---");
        meuCarro.carregarBateria();

        // 3. Freando o carro totalmente para poder carregar
        System.out.println("\n--- Parando o carro para recarga ---");
        while (meuCarro.getVelocidadeAtual() > 0) {
            meuCarro.frear();
        }

        // Recarregando com sucesso
        meuCarro.carregarBateria();

        // 4. Testando esgotamento da bateria
        System.out.println("\n--- Forçando esgotamento da bateria (Acelerar e Frear repetidamente) ---");
        // Loop simula acelerações e frenagens para gastar os 100% de bateria
        while (meuCarro.getCargaBateria() > 0) {
            meuCarro.acelerar();
            if (meuCarro.getVelocidadeAtual() >= 120) {
                meuCarro.frear(); // Freia para poder acelerar de novo e gastar bateria
            }
        }

        // Tentativa de acelerar sem bateria (Deve gerar erro)
        System.out.println("\n--- Tentando acelerar sem bateria ---");
        meuCarro.acelerar();
    }
}
