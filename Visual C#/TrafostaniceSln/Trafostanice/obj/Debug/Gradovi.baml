   M S B A M L   `   `   `  ����G  CTrafostanice, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null+clr-namespace:TrafostaniceTrafostanice  5          Trafostanice.Gradovi   5      \ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5      R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5      Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5      @d2http://schemas.microsoft.com/expression/blend/2008     5      ,localclr-namespace:Trafostanice     5        N� Title$  Gradovi��5	      .��5      � .+�5   
   �� -   5         ��Name$ comboBoxGradovi��5      $
��Left=�6,   $��	10,10,0,0q�6G   $	��Top=�6Z   $	��120��6r   $��14(�6~   6�   �� 5   
   -   5         ��Name$ labelGradNaziv��5      $��Grad:��6(   $
��Left=�68   $��
161,10,0,0q�6S   $	��Top=�6g   $��25��6   �� 5   
   -   5        $ labelBrojTrafostanica��5      $��Nadjeno trafostanica:��6/   $
��Left=�6O   $��
161,40,0,0q�6j   $	��Top=�6~   �� 5   
   -   5        $ labelGradRezultat��5      $�� ��6+   $
��Left=�66   $��
199,10,0,0q�6Q   $	��Top=�6e   ���	#FFE8E8E8$��1q�6�   ���	#FF2525256�   �� 5   
   -   5        $# labelBrojTrafostanicaRezultat��5      $�� ��67   $
��Left=�6B   $��
284,40,0,0q�6]   $	��Top=�6q    J� RenderTransformOrigin$ 
2.543,0.52&�6�   �� 5   
   -   5         ��Name$! listBoxTrafostaniceRezultat��5      $
��Left=�67   $��
276,73,0,0q�6R   $	��Top=�6f   $��1q�6~   $	��150��6�   $��50��6�   ���	#FFE8E8E86�   �� 5   
   -   5        $ label��5      $��Nazivi trafostanica:��6   $
��Left=�6>   $��
161,71,0,0q�6Y   $	��Top=�6m   �� 5   
   -   5         ��Name$ buttonPrikaziTrafostanicu��5      $��Prikaži��64   $��Right=�6F   $��	0,0,10,10q�6b   $��75��6u   $��Bottom=�6�   $��Center=�6�   $��Center=�6�   $ 0.5,0.5&�6�   {�.  ��6;  �� *TrafostaniceViewControl+ � LayoutTransform 5      V� 5      .~�5      ��  �� ScaleY$ 1Q�6%    �� ScaleX$ 1Q�60   �� 5      	 �� AngleY$	 0Q�6$   
 �� AngleX$
 0Q�6/   �� 5       �� Angle$ 0Q�6&   T� 5      5      z�5      V� 5      .~�5      �� �� 5       �� 5!      T� 5"       T� X$ -1Q�6)   5#      5%      �� 5&   
   -	   5        $ buttonPrikaziSliku��5&      $��Otvori sliku��6-   $��Right=�6D   $��	0,0,90,10q�6`   $��Bottom=�6s   $��75��6�   6�   5'      5(      