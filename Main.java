package ordem_procedencia_metodos;

import java.util.Scanner;

public class Main {
   public static void main(String args[])
   {        
       Scanner teclado = new Scanner(System.in);
       
       // Chama o método que gerencia a conta bancária passando o Scanner
       chamaMetodoContaBancaria(teclado);            
       
       teclado.close();
   }
   
   public static void chamaMetodoContaBancaria(Scanner teclado)
   {                        
       ContaBancaria conta = new ContaBancaria();
               
       System.out.println("=== CADASTRO DA CONTA ===");
       
       System.out.println("Digite o nome do cliente:");
       conta.nomeCliente = teclado.nextLine();

       System.out.println("Digite o CPF:");
       conta.cpf = teclado.nextLine();

       System.out.println("Digite o nome do banco:");
       conta.nomeBanco = teclado.nextLine();

       System.out.println("Digite a agência:");
       conta.agencia = teclado.nextLine();

       System.out.println("Digite o número da conta:");
       conta.numeroConta = teclado.nextLine();

       System.out.println("\nConta criada! Saldo inicial: R$ " + conta.saldo);
       
       // Solicita o valor do saque
       System.out.println("\nDigite o valor para sacar:");
       double valorDigitado = teclado.nextDouble();
       
       // Chama o método Sacar passando o valor e recebe o saldo atualizado
       double respostaSaldo = conta.Sacar(valorDigitado);
       
       System.out.println("Saldo atual na conta: R$ " + respostaSaldo);        
   }
}
