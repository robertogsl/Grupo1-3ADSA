package com.example.icleanmobile

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.LinearLayout
import android.widget.ScrollView
import android.widget.Toast
import androidx.fragment.app.FragmentContainerView

class TrabalhosContratada : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_trabalhos_contratada)

        var x = 0
        while (x < 10) {
            memoriaFeliz()
            x++
        }
    }


    fun fragConvites(view: View){
        val fragmento = FragmentContainerView(this)
        fragmento.id = View.generateViewId()

        findViewById<LinearLayout>(R.id.ll_fragmentos).removeAllViews()
        findViewById<LinearLayout>(R.id.ll_fragmentos).addView(fragmento)


        val transaction = supportFragmentManager.beginTransaction()

        var x = 0
        while (x < 10) {
            transaction.add(fragmento.id, ConviteCtd::class.java, null)
            Toast.makeText(this, "fock", Toast.LENGTH_SHORT).show()
            x++
        }
        transaction.commit()
    }

    fun memoriaFeliz() {
        val fragmento = FragmentContainerView(this)
        fragmento.id = View.generateViewId()

        findViewById<LinearLayout>(R.id.ll_fragmentos).addView(fragmento)

        val transaction = supportFragmentManager.beginTransaction()

        transaction.add(fragmento.id, TrabalhoCtd::class.java, null)
        transaction.commit()
    }
}