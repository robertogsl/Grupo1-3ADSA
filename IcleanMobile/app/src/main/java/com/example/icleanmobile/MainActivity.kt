package com.example.icleanmobile

import android.content.Intent
import android.content.SharedPreferences
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.content.DialogInterface
import android.widget.Button
import android.widget.EditText
import retrofit2.Callback
import retrofit2.Response
import android.widget.Toast
import retrofit2.Call


class MainActivity : AppCompatActivity() {

    lateinit var etEmail:EditText
    lateinit var etSenha:EditText

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val prefs = getSharedPreferences("prefs", MODE_PRIVATE)
        val firstStart = prefs.getBoolean("firstStart", true)

        if (firstStart) {
            execPrimeirosPassos();
        }

        etEmail = findViewById<EditText>(R.id.et_email)
        etSenha = findViewById<EditText>(R.id.et_senha)
    }

    private fun execPrimeirosPassos() {
        val introducao = Intent(this, PrimeirosPassos::class.java)
        startActivity(introducao);


        val prefs = getSharedPreferences("prefs", MODE_PRIVATE)
        val editor = prefs.edit()
        editor.putBoolean("firstStart", false)
        editor.apply()
    }

    fun RedirectCadastro(v:View){
        val telaCadastro = Intent(this, Cadastro::class.java)
        startActivity(telaCadastro);
    }

    fun LoginAutenticar(v:View) {
        val email = etEmail.text.toString()
        val senha = etSenha.text.toString()
        val login = Login(email, senha)

        val postAutenticar = ApiIclean.criar().post(login)

        postAutenticar.enqueue(object : Callback<Void> {
            override fun onResponse(call: Call<Void>, response: Response<Void>) {
                if (response.isSuccessful) {
                    Toast.makeText(baseContext, "Login realizado com sucesso!", Toast.LENGTH_SHORT).show()
                } else {
                    Toast.makeText(baseContext, "Erro: ${response.errorBody()}", Toast.LENGTH_SHORT).show()
                }
            }

            override fun onFailure(call: Call<Void>, t: Throwable) {
                t.printStackTrace()
                Toast.makeText(baseContext, "Erro na API", Toast.LENGTH_SHORT).show()
            }
        })
    }
}