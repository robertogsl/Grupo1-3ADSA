package com.example.icleanmobile

import com.google.gson.JsonArray
import com.google.gson.JsonObject
import retrofit2.Call
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.GET
import java.util.ArrayList

interface ApiGoogle {
    @GET("maps/api/geocode/json?latlng={lat},{long}&key=AIzaSyBFIFTi5e9qPPcdk_RscztQAXHqePlWsR4")
    fun getAddress() : Call<JsonObject>


    companion object {
        var BASE_URL = "https://maps.googleapis.com/"
        // Para testar via cabo USB numa API local: "http://10.0.2.2:8080/"

        fun criar() : ApiGoogle {
            val retrofit = Retrofit.Builder()
                .addConverterFactory(GsonConverterFactory.create())
                .baseUrl(BASE_URL)
                .build()
            return retrofit.create(ApiGoogle::class.java)
        }
    }
}