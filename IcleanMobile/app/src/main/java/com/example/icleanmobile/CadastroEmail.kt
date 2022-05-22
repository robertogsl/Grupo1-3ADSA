package com.example.icleanmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.Toast

class CadastroEmail : AppCompatActivity() {
    lateinit var etIdCadEmail: EditText
    lateinit var etIdCadSenha: EditText
    lateinit var etIdConfirmSenha: EditText

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cadastro_email)
    }

    fun validaCadastro(v: View){
        val telaCadastroMapa = Intent(this, MapaCadastro::class.java)

        etIdCadEmail = findViewById(R.id.et_cad_email)
        etIdCadSenha = findViewById(R.id.et_cad_senha)
        etIdConfirmSenha = findViewById(R.id.et_confirm_senha)

        val nome = intent.getStringExtra("nome")
        val cpf = intent.getStringExtra("cpf")
        val celular = intent.getStringExtra("celular")
        val nascimento = intent.getStringExtra("nascimento")

        val cadEmail = etIdCadEmail.text.toString()
        val cadSenha = etIdCadSenha.text.toString()

        telaCadastroMapa.putExtra("nome", "${nome}")
        telaCadastroMapa.putExtra("cpf", "${cpf}")
        telaCadastroMapa.putExtra("celular", "${celular}")
        telaCadastroMapa.putExtra("nascimento", "${nascimento}")
        telaCadastroMapa.putExtra("cadastroEmail", "${cadEmail}")
        telaCadastroMapa.putExtra("cadastroSenha", "${cadSenha}")

        startActivity(telaCadastroMapa);
    }
}