package com.example.icleanmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

class Cadastro : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cadastro)
    }

    fun validaCadastro (v:View){
        val telaCadastroPassoDois = Intent(this, CadastroEmail::class.java)
        startActivity(telaCadastroPassoDois);
    }
}