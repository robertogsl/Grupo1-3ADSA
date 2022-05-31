package com.example.icleanmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.CheckBox
import android.widget.EditText
import retrofit2.Callback
import retrofit2.Response
import android.widget.Toast
import retrofit2.Call


class MainActivity : AppCompatActivity() {

    lateinit var etEmail:EditText
    lateinit var etSenha:EditText
    lateinit var checkBoxContratada: CheckBox
    lateinit var checkBoxContratante: CheckBox

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
//        val telaTrabalhos = Intent(this, TrabalhosContratada::class.java)
        startActivity(telaCadastro);
    }

    fun LoginAutenticar(v:View) {
        val email = etEmail.text.toString()
        val senha = etSenha.text.toString()
        checkBoxContratada = findViewById<CheckBox>(R.id.cb_contratada)
        checkBoxContratante = findViewById<CheckBox>(R.id.cb_contratante)

        if (email.isEmpty() || senha .isEmpty()) {
            Toast.makeText(baseContext, "Insira o email ou senha para realizar o Login!", Toast.LENGTH_SHORT).show()
            return
        }

        val login = Login(email, senha)

        if (!checkBoxContratada.isChecked && !checkBoxContratante.isChecked) {
            Toast.makeText(baseContext, "Selecione um perfil para fazer Login!", Toast.LENGTH_SHORT).show()
            return
        }
        else if (checkBoxContratada.isChecked) {
            val postAutenticar = ApiIclean.criar().autenticarContratada(login)

            postAutenticar.enqueue(object : Callback<Contratada> {
                override fun onResponse(call: Call<Contratada>, response: Response<Contratada>) {
                    if (response.isSuccessful) {
                        val contratada = response.body()
                        Toast.makeText(baseContext, "Login realizado com sucesso! ${contratada}", Toast.LENGTH_SHORT).show()
                        mudarTelaTrabalhos()
                    } else {
                        Toast.makeText(baseContext, "Erro: ${response.errorBody()}", Toast.LENGTH_SHORT).show()
                    }
                }

                override fun onFailure(call: Call<Contratada>, t: Throwable) {
                    t.printStackTrace()
                    Toast.makeText(baseContext, "Erro na API", Toast.LENGTH_SHORT).show()
                }
            })
        }
        else if (checkBoxContratante.isChecked) {
            val postAutenticar = ApiIclean.criar().autenticarContratante(login)

            postAutenticar.enqueue(object : Callback<Contratante> {
                override fun onResponse(call: Call<Contratante>, response: Response<Contratante>) {
                    if (response.isSuccessful) {
                        val contratante = response.body()
                        Toast.makeText(baseContext, "Login realizado como Contratante com sucesso! ${contratante!!.id}", Toast.LENGTH_SHORT).show()
                        mudarTelaContratante(contratante!!.id)
                    } else {
                        Toast.makeText(baseContext, "Erro: ${response.errorBody()}", Toast.LENGTH_SHORT).show()
                    }
                }

                override fun onFailure(call: Call<Contratante>, t: Throwable) {
                    t.printStackTrace()
                    Toast.makeText(baseContext, "Erro na API", Toast.LENGTH_SHORT).show()
                }
            })
        }
    }

    fun mudarTelaTrabalhos() {
        val telaTrabalhos = Intent(this, TrabalhosContratada::class.java)
        startActivity(telaTrabalhos);
    }

    fun verificarCheckBoxContratada(v:View) {
        checkBoxContratada = findViewById<CheckBox>(R.id.cb_contratada)
        checkBoxContratante = findViewById<CheckBox>(R.id.cb_contratante)

        checkBoxContratante.isChecked = false
    }

    fun verificarCheckBoxContratante(v:View) {
        checkBoxContratada = findViewById<CheckBox>(R.id.cb_contratada)
        checkBoxContratante = findViewById<CheckBox>(R.id.cb_contratante)

        checkBoxContratada.isChecked = false
    }

    fun mudarTelaContratante(id: Int?) {
        val telaContratante = Intent(this, ContratanteNewService::class.java)
        telaContratante.putExtra("idProprietaria", id)
        startActivity(telaContratante)
    }
}