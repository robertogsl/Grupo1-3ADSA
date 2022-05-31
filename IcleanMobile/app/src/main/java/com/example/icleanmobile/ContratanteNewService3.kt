package com.example.icleanmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.CheckBox
import kotlin.properties.Delegates

class ContratanteNewService3 : AppCompatActivity() {
    var idProprietaria by Delegates.notNull<Int>()
    lateinit var tipoLimpeza : String
    lateinit var tipoLar : String
    lateinit var comodos : String
    lateinit var cb1 : CheckBox
    lateinit var cb2 : CheckBox
    lateinit var cb3 : CheckBox
    lateinit var cb4 : CheckBox
    lateinit var cb5 : CheckBox
    lateinit var cb6 : CheckBox
    lateinit var opcionais : String

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_contratante_new_service3)

        idProprietaria = intent.getIntExtra("idProprietaria", 0)
        tipoLimpeza = intent.getStringExtra("tipoLimpeza").toString()
        tipoLar = intent.getStringExtra("tipoLar").toString()
        comodos = intent.getStringExtra("comodos").toString()

        opcionais = ""

        cb1 = findViewById(R.id.cb_1)
        cb2 = findViewById(R.id.cb_2)
        cb3 = findViewById(R.id.cb_3)
        cb4 = findViewById(R.id.cb_4)
        cb5 = findViewById(R.id.cb_5)
        cb6 = findViewById(R.id.cb_6)
    }

    fun proximoPasso(v : View) {
        if (cb1.isChecked) {
            opcionais += " Cuidar de pets,"
        }
        if (cb2.isChecked) {
            opcionais += " Áreas externas,"
        }
        if (cb3.isChecked) {
            opcionais += " Lavagem de roupas,"
        }
        if (cb4.isChecked) {
            opcionais += " Cozinhar,"
        }
        if (cb5.isChecked) {
            opcionais += " Armários (limpeza interna),"
        }
        if (cb6.isChecked) {
            opcionais += " Cuidar de crianças,"
        }

        val proximaTela = Intent(this, ContratanteNewService4::class.java)
        proximaTela.putExtra("idProprietaria", idProprietaria)
        proximaTela.putExtra("tipoLimpeza", tipoLimpeza)
        proximaTela.putExtra("tipoLar", tipoLar)
        proximaTela.putExtra("comodos", comodos)
        proximaTela.putExtra("opcionais", opcionais)
        startActivity(proximaTela)
    }
}