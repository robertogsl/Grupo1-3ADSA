package com.example.icleanmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

class PpContratada : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_pp_contratada)
    }

    fun RedirectCadastro(v: View){
        val selecionado = "Contratada"

        val telaCadastro = Intent(this, Cadastro::class.java)
        telaCadastro.putExtra("tipoSelecionado", "${selecionado}")

        startActivity(telaCadastro);
    }
}