package com.example.icleanmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.TextView
import kotlin.properties.Delegates

class ContratanteNewService2 : AppCompatActivity() {
    lateinit var tipoLar : String
    lateinit var btnStudio : Button
    lateinit var btnApartamento : Button
    lateinit var btnCasa : Button
    lateinit var qtdQuartos : TextView
    lateinit var qtdBanheiros : TextView
    lateinit var tipoLimpeza : String
    var idProprietaria by Delegates.notNull<Int>()
    var qtdBanheiro = 0
    var qtdQuarto = 0
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_contratante_new_service2)

        tipoLimpeza = intent.getStringExtra("tipoLimpeza").toString()
        idProprietaria = intent.getIntExtra("idProprietaria", 0)

        btnStudio = findViewById<Button>(R.id.btn_studio)
        btnApartamento = findViewById<Button>(R.id.btn_apartamento)
        btnCasa = findViewById<Button>(R.id.btn_casa)
        qtdQuartos = findViewById(R.id.tv_qtdQuartos)
        qtdBanheiros = findViewById(R.id.tv_qtdBanheiros)
    }

    fun setStudio(v : View) {
        tipoLar = " Studio,"
        btnStudio.setBackgroundColor(resources.getColor(R.color.colorPrimary))
        btnStudio.setTextColor(resources.getColor(R.color.colorAccent))
        btnApartamento.setBackgroundColor(resources.getColor(R.color.colorAccent))
        btnApartamento.setTextColor(resources.getColor(R.color.colorPrimary))
        btnCasa.setBackgroundColor(resources.getColor(R.color.colorAccent))
        btnCasa.setTextColor(resources.getColor(R.color.colorPrimary))
    }

    fun setApartamento(v : View) {
        tipoLar = " Apartamento,"
        btnApartamento.setBackgroundColor(resources.getColor(R.color.colorPrimary))
        btnApartamento.setTextColor(resources.getColor(R.color.colorAccent))
        btnStudio.setBackgroundColor(resources.getColor(R.color.colorAccent))
        btnStudio.setTextColor(resources.getColor(R.color.colorPrimary))
        btnCasa.setBackgroundColor(resources.getColor(R.color.colorAccent))
        btnCasa.setTextColor(resources.getColor(R.color.colorPrimary))
    }

    fun setCasa(v : View) {
        tipoLar = " Casa,"
        btnCasa.setBackgroundColor(resources.getColor(R.color.colorPrimary))
        btnCasa.setTextColor(resources.getColor(R.color.colorAccent))
        btnApartamento.setBackgroundColor(resources.getColor(R.color.colorAccent))
        btnApartamento.setTextColor(resources.getColor(R.color.colorPrimary))
        btnStudio.setBackgroundColor(resources.getColor(R.color.colorAccent))
        btnStudio.setTextColor(resources.getColor(R.color.colorPrimary))
    }

    fun addQuarto(v:View) {
        qtdQuarto++
        qtdQuartos.text = "$qtdQuarto"
    }

    fun tirarQuarto(v : View) {
        qtdQuarto--
        qtdQuartos.text = "$qtdQuarto"
    }

    fun tirarBanheiro(v : View) {
        qtdBanheiro--
        qtdBanheiros.text = "$qtdBanheiro"
    }

    fun addBanheiro(v:View) {
        qtdBanheiro++
        qtdBanheiros.text = "$qtdBanheiro"
    }

    fun proximoPasso(v : View) {
        val proximaTela = Intent(this, ContratanteNewService3::class.java)
        proximaTela.putExtra("idProprietaria", idProprietaria)
        proximaTela.putExtra("tipoLimpeza", tipoLimpeza)
        proximaTela.putExtra("tipoLar", tipoLar)
        proximaTela.putExtra("comodos", " ${qtdQuartos.text} Quartos e ${qtdBanheiros.text} Banheiros,")
        startActivity(proximaTela)
    }
}