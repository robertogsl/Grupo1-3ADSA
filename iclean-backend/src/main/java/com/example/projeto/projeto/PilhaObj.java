package com.example.projeto.projeto;

public class PilhaObj<T> {

    // Atributos
    private int topo;
    private T[] pilha;

    // Construtor
    public PilhaObj(int capacidade) {
        topo = -1;
        pilha = (T[]) new Object[capacidade];
    }

    // Metodos
    public Boolean isEmpty() {
        return topo == -1;
    }

    public Boolean isFull() {
        return (pilha.length - 1) == topo;
    }

    public void push(T info) {
        if(!isFull()) {
            pilha[++topo] = info;
        } else {
            System.out.println("Pilha cheia");
        }
    }

    public T pop() {
        if(!isEmpty()) {
            return pilha[topo--];
        }
        return null;
    }

    public T peek() {
        return !isEmpty() ? pilha[topo] : null;
    }

    public void exibeDsc() {
        if(isEmpty()) {
            System.out.println("Pilha vazia");
        } else {
            System.out.println("\n-----Lista Decrescente-----");
            for(int i = topo; i >= 0; i--) {
                System.out.println(pilha[i]);
            }
            System.out.println("----------------------------\n");
        }
    }

    public void exibeAsc() {
        if(isEmpty()) {
            System.out.println("Pilha vazia\n");
        } else {
            System.out.println("\n-----Lista Crescente-----");
            for(int i = 0; i <= topo; i++) {
                System.out.println(pilha[i]);
            }
            System.out.println("----------------------------\n");
        }
    }

}

