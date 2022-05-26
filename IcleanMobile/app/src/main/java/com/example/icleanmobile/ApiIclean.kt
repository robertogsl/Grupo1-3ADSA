package com.example.icleanmobile

import retrofit2.Call
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.*

interface ApiIclean {
    @GET("contratadas")
    fun get() : Call<List<Contratada>>

    @POST("contratadas/autenticar")
    fun autenticarContratada(@Body login:Login) : Call<Contratada>

    @POST("proprietarias/autenticar")
    fun autenticarContratante(@Body login:Login) : Call<Contratante>

    @POST("contratadas")
    fun post(@Body novaContratada: Contratada) : Call<Void>

    @POST("proprieatarias")
    fun postContratante(@Body novaContratante: Contratante) : Call<Void>

    @GET("/trabalhos")
    fun getAllJobs() : Call<List<Trabalho>>

    companion object {
        //var BASE_URL = "http://18.210.127.86:8080/"
        var BASE_URL = "http://10.0.2.2:8080/"
        // Para testar via cabo USB numa API local: "http://10.0.2.2:8080/"

        fun criar() : ApiIclean {
            val retrofit = Retrofit.Builder()
                .addConverterFactory(GsonConverterFactory.create())
                .baseUrl(BASE_URL)
                .build()
            return retrofit.create(ApiIclean::class.java)
        }
    }
}