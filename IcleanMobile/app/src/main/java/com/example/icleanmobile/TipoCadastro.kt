package com.example.icleanmobile

import android.content.Intent
import android.os.Build
import android.os.Bundle
import android.os.PersistableBundle
import android.view.View
import android.widget.Toast
import androidx.annotation.RequiresApi
import androidx.appcompat.app.AppCompatActivity
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class TipoCadastro : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_tipo_cadastro)
    }

    @RequiresApi(Build.VERSION_CODES.O)
    fun criarContratada(v: View) {

        val nome = intent.getStringExtra("nome")
        val cpf = intent.getStringExtra("cpf")
        val celular = intent.getStringExtra("celular")
        val nascimento = intent.getStringExtra("nascimento")
        val cadastroEmail = intent.getStringExtra("cadastroEmail")
        val cadastroSenha = intent.getStringExtra("cadastroSenha")
        var longitude = intent.getDoubleExtra("longitude", 0.0)
        var latitude = intent.getDoubleExtra("latitude", 0.0)

        // var date = LocalDate.parse("2002-06-06")
        val novaContratada = Contratada(
            null,
            "${nome}",
            "${cpf}",
            "${celular}",
            "${nascimento}",
            "${cadastroEmail}",
            "${cadastroSenha}",
            null,
            null,
            null,
            null,
            longitude,
            latitude
        )

        val postContratada = ApiIclean.criar().post(novaContratada)

        postContratada.enqueue(object : Callback<Void> {
            override fun onResponse(call: Call<Void>, response: Response<Void>) {
                if (response.isSuccessful) {
                    Toast.makeText(baseContext, "Cadastro realizado com sucesso!", Toast.LENGTH_SHORT).show()
                    mudarParaLogin()
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

    fun criarContratante(v : View) {
        val nome = intent.getStringExtra("nome")
        val cpf = intent.getStringExtra("cpf")
        val celular = intent.getStringExtra("celular")
        val nascimento = intent.getStringExtra("nascimento")
        val cadastroEmail = intent.getStringExtra("cadastroEmail")
        val cadastroSenha = intent.getStringExtra("cadastroSenha")

        // var date = LocalDate.parse("2002-06-06")
        var novaContratante = Contratante(
            null,
            "${nome}",
            "${cpf}",
            "${celular}",
            "${nascimento}",
            "${cadastroEmail}",
            "${cadastroSenha}",
            null
        )

        val postContratada = ApiIclean.criar().postContratante(novaContratante)

        postContratada.enqueue(object : Callback<Void> {
            override fun onResponse(call: Call<Void>, response: Response<Void>) {
                if (response.isSuccessful) {
                    Toast.makeText(baseContext, "Cadastro realizado com sucesso!", Toast.LENGTH_SHORT).show()
                    mudarParaLogin()
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

    fun mudarParaLogin() {
        val telaLogin = Intent(this, MainActivity::class.java)
        startActivity(telaLogin)
    }
}