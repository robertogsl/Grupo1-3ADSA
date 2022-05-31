package com.example.icleanmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast

class PrimeirosPassos : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onBackPressed() {

    }

    fun contratante (v: View){
        val telaPpContratante = Intent(this, PpContratante::class.java)
        startActivity(telaPpContratante);
    }

    fun contratada (v: View){
        val telaPpContratada = Intent(this, PpContratada::class.java)
        startActivity(telaPpContratada);
    }
}