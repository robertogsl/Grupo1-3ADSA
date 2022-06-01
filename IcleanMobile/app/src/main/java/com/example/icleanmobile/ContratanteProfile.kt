package com.example.icleanmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.TextView
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import kotlin.properties.Delegates

class ContratanteProfile : AppCompatActivity() {
    var idProprietaria by Delegates.notNull<Int>()
    lateinit var nomeProprietaria: TextView
    lateinit var descricaoProprietaria: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_contratante_profile)
        idProprietaria = intent.getIntExtra("idProprietaria", 0)
        retornarProprietaria(idProprietaria)
        nomeProprietaria = findViewById(R.id.tv_nome_proprietaria)
        descricaoProprietaria = findViewById(R.id.tv_descricao)
    }

    fun retornarProprietaria(id : Int) {
        val getProprietaria = ApiIclean.criar().getProprietaria(id)

        getProprietaria.enqueue(object : Callback<Proprietaria>{
            override fun onResponse(call: Call<Proprietaria>, response: Response<Proprietaria>) {
                nomeProprietaria.text = "${response.body()?.nome}"
            }

            override fun onFailure(call: Call<Proprietaria>, t: Throwable) {
                TODO("Not yet implemented")
            }
        })
    }

    fun telaPerfil(v : View) {
        val telaPerfil = Intent(this, ContratanteProfile::class.java)
        telaPerfil.putExtra("idProprietaria", idProprietaria)
        startActivity(telaPerfil)
    }

    fun telaServicos(v: View) {
        val telaServicos = Intent(this, ContratanteList::class.java)
        telaServicos.putExtra("idProprietaria", idProprietaria)
        startActivity(telaServicos)
    }

    fun telaAddJob(v : View) {
        val telaServicos = Intent(this, ContratanteNewService::class.java)
        telaServicos.putExtra("idProprietaria", idProprietaria)
        startActivity(telaServicos)
    }
}