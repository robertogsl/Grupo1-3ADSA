package com.example.icleanmobile

import android.content.Intent
import android.content.SharedPreferences
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.content.DialogInterface




class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val prefs = getSharedPreferences("prefs", MODE_PRIVATE)
        val firstStart = prefs.getBoolean("firstStart", true)

        if (firstStart) {
            execPrimeirosPassos();
        }

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
}