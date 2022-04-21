package com.example.icleanmobile

import java.time.LocalDate

data class Contratada(
    val id: Int,
    val nome: String,
    val cpf: String,
    val telefone: String,
    val dataNascimento: LocalDate,
    val email: String,
    val senha: String,
    val autentiacado: Boolean,
    val cep: String,
    val complemento: String,
    val numero: String,
    val longitude: Double,
    val latitude: Double
)