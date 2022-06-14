package com.example.icleanmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.TextView
import android.widget.Toast
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import kotlin.properties.Delegates

class ContratanteSearch2 : AppCompatActivity() {
    lateinit var tvNome: TextView
    var contratadaId by Delegates.notNull<Int>()
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_contratante_search2)
        val contratadaId = intent.getIntExtra("contratadaId", 0)
        val nome = intent.getStringExtra("nome")
        tvNome = findViewById(R.id.tv_nome)
        tvNome.text = "$nome"
        Toast.makeText(baseContext, "$contratadaId", Toast.LENGTH_SHORT).show()
    }

    fun proximaTela(v : View) {
        val proxima = Intent(this, ContratanteSearch3::class.java)
        proxima.putExtra("contratadaId", contratadaId)
        startActivity(proxima)
    }
}