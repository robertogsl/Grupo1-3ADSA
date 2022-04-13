package com.example.icleanmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

class PpContratante : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_pp_contratante)
    }

    fun RedirectCadastro(v:View){
        val telaCadastro = Intent(this, Cadastro::class.java)
        startActivity(telaCadastro);
    }
}