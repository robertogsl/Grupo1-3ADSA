package com.example.icleanmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

class ContratanteSearch3 : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_contratante_search3)

    }

    fun selectJob(v : View) {
        val proximaTela = Intent(this, ContratanteSearch4::class.java)
        proximaTela.putExtra("idTrabalho", 30)
        startActivity(proximaTela)
    }
}