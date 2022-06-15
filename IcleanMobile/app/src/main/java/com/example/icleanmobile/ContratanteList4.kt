package com.example.icleanmobile

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.TextView
import android.widget.Toast
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import kotlin.properties.Delegates

class ContratanteList4 : AppCompatActivity() {
    lateinit var tvNome : TextView
    var idProprietaria by Delegates.notNull<Int>()
    var idJob by Delegates.notNull<Int>()
    var idCandidata by Delegates.notNull<Int>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_contratante_list4)
        tvNome = findViewById(R.id.tv_nome)
        var nomeCandidata = intent.getStringExtra("nomeContratada")
        tvNome.text = nomeCandidata
        idCandidata = intent.getIntExtra("idContratada", 0)
        idProprietaria = intent.getIntExtra("idProprietaria", 0)
        idJob = intent.getIntExtra("idJob", 0)
    }

    fun empregarCandidata(v : View) {
        val putEmpregar = ApiIclean.criar().putEmpregar(idJob, idCandidata)

        putEmpregar.enqueue(object : Callback<Void>{
            override fun onResponse(call: Call<Void>, response: Response<Void>) {
                Toast.makeText(baseContext, "Candidata selecionada para trabalho com sucesso!", Toast.LENGTH_SHORT).show()
            }

            override fun onFailure(call: Call<Void>, t: Throwable) {
                Toast.makeText(baseContext, "Falhou", Toast.LENGTH_SHORT).show()
            }
        })
    }
}