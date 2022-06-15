package com.example.icleanmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.Toast
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import kotlin.properties.Delegates

class ContratanteList2 : AppCompatActivity() {
    lateinit var btnCandidata : Button
    var candidata by Delegates.notNull<Int>()
    var idJob by Delegates.notNull<Int>()
    var idProprietaria by Delegates.notNull<Int>()
    lateinit var nomeContratada : String

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_contratante_list2)
        btnCandidata = findViewById(R.id.btn_candidata)
        idJob = intent.getIntExtra("idJob", 0)
        idProprietaria = intent.getIntExtra("idProprietaria", 0)
        getCandidatas(idProprietaria, idJob)
    }

    fun getCandidatas(idProprietaria: Int, idJob: Int) {
        val request = ApiIclean.criar().getJob(idJob)

        request.enqueue(object : Callback<Trabalho> {
            override fun onResponse(call: Call<Trabalho>, response: Response<Trabalho>) {
                btnCandidata.setText("${response.body()?.candidatas?.get(0)?.nome}")
                candidata = response.body()?.candidatas?.get(0)?.id!!
                nomeContratada = response.body()?.candidatas?.get(0)?.nome!!
            }

            override fun onFailure(call: Call<Trabalho>, t: Throwable) {
                Toast.makeText(baseContext, "Falhou", Toast.LENGTH_SHORT).show()
            }
        })
    }

    fun proximaTela(v : View) {
        val proximaTela = Intent(this, ContratanteList4::class.java)
        proximaTela.putExtra("idContratada", candidata)
        proximaTela.putExtra("nomeContratada", nomeContratada)
        proximaTela.putExtra("idJob", idJob)
        proximaTela.putExtra("idProprietaria", idProprietaria)
        startActivity(proximaTela)
    }
}