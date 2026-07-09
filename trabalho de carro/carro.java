Classe carroEletrico;

String velocidade_atual;

int carrregar_carro (0 = 100);

Classe acelerar;

velocidade_atual int (0 = 100)

print float = velocidade_atual; 
Classe km;
km = 20km 
class CarroEletrico:
    def __init__(self):
        # Atributos iniciais do carro
        self.velocidade_atual = 0  # Começa parado (0 a 100)
        self.bateria = 100         # Começa carregado (0 a 100)
        self.km_rodados = 20       # Quilometragem inicial pedida (20km)

    def carregar_carro(self):
        """Restaura a bateria para 100%"""
        self.bateria = 100
        print("Bateria totalmente carregada: 100%")

    def acelerar(self, quantidade):
        """Aumenta a velocidade do carro até o limite de 100"""
        self.velocidade_atual += quantidade
        
        # Garante que a velocidade não passe de 100
        if self.velocidade_atual > 100:
            self.velocidade_atual = 100
            
        print(f"O carro acelerou!")

    def exibir_status(self):
        """Exibe a velocidade atual em formato float e a quilometragem"""
        # Converte a velocidade para float antes de imprimir
        velocidade_float = float(self.velocidade_atual)
        print(f"Velocidade Atual: {velocidade_float} km/h")
        print(f"Quilometragem: {self.km_rodados} km")
        print(f"Bateria: {self.bateria}%")


# --- Testando o código na prática ---

# 1. Criando o objeto do carro elétrico
meu_carro = CarroEletrico()

# 2. Exibindo o status inicial
print("--- Status Inicial ---")
meu_carro.exhibir_status()

# 3. Acelerando o carro
print("\n--- Acelerando ---")
meu_carro.acelerar(45)
meu_carro.exhibir_status()
