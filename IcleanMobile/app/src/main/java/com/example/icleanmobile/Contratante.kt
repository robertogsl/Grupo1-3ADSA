package com.example.icleanmobile

data class Contratante (
    var id: Int?,
    val nome: String,
    val cpf: String,
    val telefone: String,
    val dataNascimento: String,
    val email: String,
    val senha: String,
    val autentiacado: Boolean?
)