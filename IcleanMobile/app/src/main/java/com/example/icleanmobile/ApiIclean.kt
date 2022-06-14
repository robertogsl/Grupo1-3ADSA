package com.example.icleanmobile

import retrofit2.Call
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.*

interface ApiIclean {
    @GET("contratadas")
    fun get() : Call<List<Contratada>>

    @GET("contratadas/{id}")
    fun getContratada(@Path("id") id: Int) : Call<Contratada>

    @GET("proprietarias/{id}")
    fun getProprietaria(@Path("id") id: Int) : Call<Proprietaria>

    @POST("contratadas/autenticar")
    fun autenticarContratada(@Body login:Login) : Call<Contratada>

    @POST("proprietarias/autenticar")
    fun autenticarContratante(@Body login:Login) : Call<Contratante>

    @POST("contratadas")
    fun post(@Body novaContratada: Contratada) : Call<Void>

    @POST("proprietarias")
    fun postContratante(@Body novaContratante: Contratante) : Call<Void>

    @GET("trabalhos")
    fun getAllJobs() : Call<Array<Trabalho>>

    @GET("trabalhos/proprietaria/{id}")
    fun getAllJobsProprietaria(@Path("id") id : Int) : Call<Array<Trabalho>>

    @GET("trabalhos/{id}")
    fun getJob(@Path("id") id:Int) : Call<Trabalho>

    @PUT("trabalhos/{idTrabalho}/candidata/{id}")
    fun putCandidatar(@Path("idTrabalho") idTrabalho: Int, @Path("id") id: Int) : Call<Void>

    @POST("trabalhos")
    fun criarJob(@Body novoTrabalho: Trabalho) : Call<Void>

    companion object {
        //var BASE_URL = "http://backend-iclean.hopto.org/"
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