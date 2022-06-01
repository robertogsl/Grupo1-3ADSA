package com.example.icleanmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import java.util.*
import kotlin.properties.Delegates

class ContratanteNewService : AppCompatActivity() {
    lateinit var proximoPasso : Intent
    var idProprietaria by Delegates.notNull<Int>()
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_contratante_new_service)
        idProprietaria = intent.getIntExtra("idProprietaria", 0)
        proximoPasso = Intent(this, ContratanteNewService2::class.java)
    }

    fun limpezaPadrao(v: View) {
        proximoPasso.putExtra("tipoLimpeza", "Limpeza Padrão,")
        proximoPasso.putExtra("idProprietaria", idProprietaria)
        startActivity(proximoPasso)
    }

    fun limpezaPesada(v: View) {
        proximoPasso.putExtra("tipoLimpeza", "Limpeza Pesada,")
        proximoPasso.putExtra("idProprietaria", idProprietaria)
        startActivity(proximoPasso)
    }

    fun passarRoupa(v: View) {
        proximoPasso.putExtra("tipoLimpeza", "Passar roupa,")
        proximoPasso.putExtra("idProprietaria", idProprietaria)
        startActivity(proximoPasso)
    }

    fun telaPerfil(v : View) {
        val telaPerfil = Intent(this, ContratanteProfile::class.java)
        telaPerfil.putExtra("idProprietaria", idProprietaria)
        startActivity(telaPerfil)
    }

    fun telaServicos(v: View) {
        val telaServicos = Intent(this, ContratanteList::class.java)
        telaServicos.putExtra("idProprietaria", idProprietaria)
        startActivity(telaServicos)
    }

    fun telaAddJob(v : View) {
        val telaServicos = Intent(this, ContratanteNewService::class.java)
        telaServicos.putExtra("idProprietaria", idProprietaria)
        startActivity(telaServicos)
    }
}