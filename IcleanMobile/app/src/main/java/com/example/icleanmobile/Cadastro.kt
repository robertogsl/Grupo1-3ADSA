package com.example.icleanmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.ImageView
import android.widget.TextView

class Cadastro : AppCompatActivity() {

    lateinit var etIdNome: EditText
    lateinit var etIdCpf: EditText
    lateinit var etIdCelular: EditText
    lateinit var etIdNascimento: EditText

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cadastro)
    }

    fun validaCadastro (v:View){
        val telaCadastroPassoDois = Intent(this, CadastroEmail::class.java)

        etIdNome = findViewById(R.id.et_nome)
        etIdCpf = findViewById(R.id.et_cpf)
        etIdCelular = findViewById(R.id.et_celular)
        etIdNascimento = findViewById(R.id.et_nascimento)

        val selecionado = intent.getStringExtra("tipoSelecionado")
        val nome = etIdNome.text.toString()
        val cpf = etIdNome.text.toString()
        val celular = etIdNome.text.toString()
        val nascimento = etIdNome.text.toString()


        telaCadastroPassoDois.putExtra("selecionado", "${selecionado}")
        telaCadastroPassoDois.putExtra("nome", "${nome}")
        telaCadastroPassoDois.putExtra("cpf", "${cpf}")
        telaCadastroPassoDois.putExtra("celular", "${celular}")
        telaCadastroPassoDois.putExtra("nascimento", "${nascimento}")

        startActivity(telaCadastroPassoDois);
    }
}