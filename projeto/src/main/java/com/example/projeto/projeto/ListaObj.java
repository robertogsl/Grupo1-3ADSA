package com.example.projeto.projeto;
//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

public class ListaObj<T> {
    private T[] vetor;
    private int nroElem;

    public ListaObj(int capacidade) {
        this.vetor = (T[])(new Object[capacidade]);
        this.nroElem = 0;
    }

    public Boolean adiciona(T valor) {
        if (this.nroElem >= this.vetor.length) {
            System.out.println("Lista cheia!");
            return false;
        } else {
            this.vetor[this.nroElem++] = valor;
            return true;
        }
    }

    public void exibe() {
        if (this.nroElem == 0) {
            System.out.println("\nA lista está vazia!");
        } else {
            System.out.println("\nLista:");

            for(int i = 0; i < this.nroElem; ++i) {
                System.out.println(this.vetor[i]);
            }

            System.out.println();
        }

    }

    public int busca(T valorPesquisado) {
        for(int i = 0; i < this.nroElem; ++i) {
            if (this.vetor[i].equals(valorPesquisado)) {
                return i;
            }
        }

        return -1;
    }

    public Boolean removePeloIndice(int indice) {
        if (indice >= 0 && indice < this.nroElem) {
            for(int i = indice; i < this.nroElem - 1; ++i) {
                this.vetor[i] = this.vetor[i + 1];
            }

            --this.nroElem;
            return true;
        } else {
            System.out.println("Índice inválido!");
            return false;
        }
    }

    public Boolean removeElemento(T valor) {
        return this.removePeloIndice(this.busca(valor));
    }

    public int getTamanho() {
        return this.nroElem;
    }

    public T getElemento(int indice) {
        return indice >= 0 && indice < this.nroElem ? this.vetor[indice] : null;
    }

    public void limpa() {
        this.nroElem = 0;
    }
}
