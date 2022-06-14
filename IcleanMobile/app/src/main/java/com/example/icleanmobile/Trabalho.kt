package com.example.icleanmobile
import java.io.Serializable

data class Trabalho(
    val id: Int?,
    val proprietaria: Proprietaria,
    val candidatas: List<Contratada>?,
    val preco: Double?,
    val especificacao: String,
    val cep: String?,
    val complemento: String?,
    val numero: String?,
    val longitude: Double,
    val latitude: Double
) : Serializable