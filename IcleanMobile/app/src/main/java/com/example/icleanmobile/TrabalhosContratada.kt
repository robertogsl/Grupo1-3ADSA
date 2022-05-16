package com.example.icleanmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.LinearLayout
import android.widget.TextView
import android.widget.Toast
import androidx.fragment.app.FragmentContainerView

class TrabalhosContratada : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_tela_principal_ctd)
    }

    lateinit var tvIconServices: TextView
    lateinit var tvIconInvites: TextView
    lateinit var tvIconReceived: TextView

    fun fragServicos(view: View) {
        findViewById<LinearLayout>(R.id.ll_fragmentos).removeAllViews()
        val transaction = supportFragmentManager.beginTransaction()

        tvIconServices = findViewById(R.id.tv_iconServices)
        tvIconInvites = findViewById(R.id.tv_iconInvites)
        tvIconReceived = findViewById(R.id.tv_iconReceived)

        tvIconServices.setBackgroundTintList(this.getResources().getColorStateList(R.color.colorPrimary));
        tvIconInvites.setBackgroundTintList(this.getResources().getColorStateList(R.color.black));
        tvIconReceived.setBackgroundTintList(this.getResources().getColorStateList(R.color.black));

        var x = 0
        while (x < 20) {
            val fragmento = FragmentContainerView(this)

            fragmento.id = View.generateViewId()
            findViewById<LinearLayout>(R.id.ll_fragmentos).addView(fragmento)
            transaction.add(fragmento.id, TrabalhoCtd::class.java, null)
            x++
        }

        transaction.commit()
    }

    fun fragConvites(view: View){
        findViewById<LinearLayout>(R.id.ll_fragmentos).removeAllViews()
        val transaction = supportFragmentManager.beginTransaction()

        tvIconServices = findViewById(R.id.tv_iconServices)
        tvIconInvites = findViewById(R.id.tv_iconInvites)
        tvIconReceived = findViewById(R.id.tv_iconReceived)

        tvIconServices.setBackgroundTintList(this.getResources().getColorStateList(R.color.black));
        tvIconInvites.setBackgroundTintList(this.getResources().getColorStateList(R.color.colorPrimary));
        tvIconReceived.setBackgroundTintList(this.getResources().getColorStateList(R.color.black));

        var x = 0
        while (x < 20) {
            val fragmento = FragmentContainerView(this)

            fragmento.id = View.generateViewId()
            findViewById<LinearLayout>(R.id.ll_fragmentos).addView(fragmento)
            transaction.add(fragmento.id, ConviteCtd::class.java, null)
            x++
        }
        transaction.commit()
    }

    fun fragReceived(view: View){
        findViewById<LinearLayout>(R.id.ll_fragmentos).removeAllViews()
        val transaction = supportFragmentManager.beginTransaction()

        tvIconServices = findViewById(R.id.tv_iconServices)
        tvIconInvites = findViewById(R.id.tv_iconInvites)
        tvIconReceived = findViewById(R.id.tv_iconReceived)

        tvIconServices.setBackgroundTintList(this.getResources().getColorStateList(R.color.black));
        tvIconInvites.setBackgroundTintList(this.getResources().getColorStateList(R.color.black));
        tvIconReceived.setBackgroundTintList(this.getResources().getColorStateList(R.color.colorPrimary));

        var x = 0
        while (x < 20) {
            val fragmento = FragmentContainerView(this)

            fragmento.id = View.generateViewId()
            findViewById<LinearLayout>(R.id.ll_fragmentos).addView(fragmento)
            transaction.add(fragmento.id, CandidaturaCtd::class.java, null)
            x++
        }
        transaction.commit()
    }

    fun detalheTrabalho(v: View?) {
        findViewById<LinearLayout>(R.id.ll_fragmentos).removeAllViews()
        val transaction = supportFragmentManager.beginTransaction()

        transaction.replace(R.id.ll_fragmentos, DetalheServico::class.java, null)
        transaction.commit()
    }

    fun voltarPrincipal(v:View){
        val telaPrincipal = Intent(this, TrabalhosContratada::class.java)
        startActivity(telaPrincipal);
    }
}