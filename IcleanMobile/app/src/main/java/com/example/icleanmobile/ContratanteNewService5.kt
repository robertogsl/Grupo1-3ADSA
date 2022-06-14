package com.example.icleanmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.Toast
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import kotlin.properties.Delegates

class ContratanteNewService5 : AppCompatActivity() {
    var idProprietaria by Delegates.notNull<Int>()
    lateinit var tipoLimpeza : String
    lateinit var tipoLar : String
    lateinit var comodos : String
    lateinit var opcionais : String
    var longitude by Delegates.notNull<Double>()
    var latitude by Delegates.notNull<Double>()
    lateinit var cep : EditText
    lateinit var numero : EditText
    lateinit var complemento : EditText

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_contratante_new_service5)

        idProprietaria = intent.getIntExtra("idProprietaria", 0)
        tipoLimpeza = intent.getStringExtra("tipoLimpeza").toString()
        tipoLar = intent.getStringExtra("tipoLar").toString()
        comodos = intent.getStringExtra("comodos").toString()
        opcionais = intent.getStringExtra("opcionais").toString()
        longitude = intent.getDoubleExtra("longitude", 0.0)
        latitude = intent.getDoubleExtra("latitude", 0.0)
        Toast.makeText(baseContext, "$idProprietaria", Toast.LENGTH_SHORT).show()
        cep = findViewById(R.id.et_cep)
        numero = findViewById(R.id.et_numero)
        complemento = findViewById(R.id.et_complemento)
    }

    fun criarServico(v : View) {
        var descricao = ""
        descricao += tipoLimpeza
        descricao += tipoLar
        descricao += comodos
        descricao += opcionais

        val getProprietaria = ApiIclean.criar().getProprietaria(idProprietaria)

        getProprietaria.enqueue(object : Callback<Proprietaria>{
            override fun onResponse(call: Call<Proprietaria>, response: Response<Proprietaria>) {
                var proprietaria = response.body()
                fazerRequest(descricao, proprietaria)
                // Toast.makeText(baseContext, "${proprietaria}", Toast.LENGTH_SHORT).show()
            }

            override fun onFailure(call: Call<Proprietaria>, t: Throwable) {
                TODO("Not yet implemented")
            }
        })
    }

    fun fazerRequest(descricao: String, proprietaria: Proprietaria?) {
        var novoTrabalho = Trabalho(
            null,
            proprietaria!!,
            null,
            null,
            descricao,
            this.cep.text.toString(),
            this.complemento.text.toString(),
            this.numero.text.toString(),
            longitude,
            latitude
        )

        val postJob = ApiIclean.criar().criarJob(novoTrabalho)

        postJob.enqueue(object : Callback<Void>{
            override fun onResponse(call: Call<Void>, response: Response<Void>) {
                Toast.makeText(baseContext, "Trabalho criado com sucesso!", Toast.LENGTH_SHORT).show()
                mudarTelaInicial()
            }

            override fun onFailure(call: Call<Void>, t: Throwable) {
                TODO("Not yet implemented")
            }
        })
    }

    fun mudarTelaInicial() {
        val telaPerfil = Intent(this, ContratanteNewService::class.java)
        telaPerfil.putExtra("idProprietaria", idProprietaria)
        startActivity(telaPerfil)
    }
}