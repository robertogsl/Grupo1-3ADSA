package com.example.icleanmobile

import android.os.Build
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import retrofit2.Callback
import retrofit2.Response
import android.widget.Toast
import androidx.annotation.RequiresApi
import retrofit2.Call
import java.time.LocalDate

class CadastroMapa : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cadastro_mapa)
    }

    @RequiresApi(Build.VERSION_CODES.O)
    fun criarContratada(v: View) {
        // var date = LocalDate.parse("2002-06-06")
        val novaContratada = Contratada(
            null,
            "Roberto",
            "45008802836",
            "11 943603087",
            "2002-06-06",
            "roberto.teste@gmail.com",
            "1234",
            null,
            "09810-760",
            "",
            "31",
            0.01,
            -0.01
        )

        val postContratada = ApiIclean.criar().post(novaContratada)

        postContratada.enqueue(object : Callback<Void> {
            override fun onResponse(call: Call<Void>, response: Response<Void>) {
                if (response.isSuccessful) {
                    Toast.makeText(baseContext, "Cadastro realizado com sucesso!", Toast.LENGTH_SHORT).show()
                } else {
                    Toast.makeText(baseContext, "Erro: ${response.errorBody()}", Toast.LENGTH_SHORT).show()
                }
            }

            override fun onFailure(call: Call<Void>, t: Throwable) {
                t.printStackTrace()
                Toast.makeText(baseContext, "Erro na API", Toast.LENGTH_SHORT).show()
            }
        })
    }
}