package com.example.icleanmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

class CadastroEmail : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cadastro_email)
    }

    fun validaCadastro(v: View){
        val telaCadastroMapa = Intent(this, CadastroMapa::class.java)
        startActivity(telaCadastroMapa);
    }
}