   M S B A M L   `   `   `  ����H  DTranfostanice, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null-clr-namespace:TranfostaniceTranfostanice  5   	       Tranfostanice.MainWindow   5   	   R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5   	   R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   -localclr-namespace:Tranfostanice     5   	   X TXceed.Wpf.Toolkit, Version=3.0.0.0, Culture=neutral, PublicKeyToken=3e4669d2f30244f44xctk)http://schemas.xceed.com/wpf/xaml/toolkit  5   	     � Title$  
MainWindow��5	   	   $
��1137��6   $	��297��6)   $	��470��66   $	��190��6E   .��5
      � $��0,0,2,-4q�6    � ColumnDefinitions 5   
   �� 5      .+�5   
   �� -   5         ��Name$ nazivGradaLabel��5      $��Izaberi grad:��6)   $
��Left=�6A   $��10,7,0,0q�6\   $	��Top=�6n   $	��136��6�   $��14(�6�   &   System.Windows.Controls.DataGrid  5   
   -   5        $��dataGridGradovi��5         AutoGenerateColumns .  $��165,36,170,10q�5         CanUserResizeRows .  $��18(�5   )   ��5      �� *search_grad_Binding+   Columns 5      0  *System.Windows.Controls.DataGridTextColumn  5      ,  &System.Windows.Controls.DataGridColumn   Header$
 ID #��5   !      Width5  /System.Windows.Controls.DataGridLengthConverter$ 75 5   !      
IsReadOnly . 1  +System.Windows.Controls.DataGridBoundColumn	   Binding	 5   %   �� 
 �� Path$
 id�5   !     5      $ 	Ime grada��5   !   $	 100 5   !    . 	 5   %   �� $
 naziv_grada�5   !     5       $ Naziv trafostanice��5!   !   $	 150 5"   !    . 	 5    %   �� $
 naziv_trafostanice�5#   !     5$      $ Naziv transformatora��5%   !   $	 150 5&   !    . 	 5$   %   �� $
 naziv_transformatora�5'   !     5(      $ Broj prekidaca��5)   !   $	 150 5*   !    . 	 5(   %   �� $
 broj_prekidaca�5+   !   5  /System.Windows.Controls.DataGridHyperlinkColumn  5,      5.      �� 5/   
   -   5         ��Name$ comboBoxGradovi��5/      $
��Left=�6,   $��	10,36,0,0q�6G   $	��Top=�6Z   $	��136��6r   $��30��6   $��16(�6  ��6~   �� *naziv_grada+6  �� 50   
   -   5        $ comboBoxTrafostanica��50      $
��Left=�61   $��
10,100,0,0q�6L   $	��Top=�6`   $	��136��6x   $��30��6�   $��14(�6�   $y�Hidden=�6  ��6�   �� *naziv_trafostanice+6  �� 51   
   -   5        $ nazivTrafostaniceLabel��51      $��Izaberi trafostanicu:��60   $
��Left=�6P   $��	10,71,0,0q�6k   $	��Top=�6~   $��14(�6�   $y�Hidden=�6�   �� 52   
   -   5        $ transformatorLabel��52      $��Izaberi transformator:��6,   $
��Left=�6M   $��
10,135,0,0q�6h   $	��Top=�6|   $	��150��6�   $��14(�6�   $y�Hidden=�6�   �� 53   
   -   5        $ comboBoxTransformator��53      $
��Left=�62   $��
10,164,0,0q�6M   $	��Top=�6a   $	��136��6y   $��14(�6�   $��30��6�   $y�Hidden=�6�   �� 54   
   -   5         ��Name$ buttonNovaTrafostanica��54      $��Nova trafostanica��61   $��Right=�6M   $��	0,36,10,0q�6i   $	��Top=�6|   $	��155��6�   $��30��6�   $��14(�6�   �� 55   
   -	   5        $ buttonNoviTransformator��55      $��Novi transformator��62   $��Right=�6O   $��	0,71,10,0q�6k   $	��Top=�6~   $	��155��6�   $��30��6�   $��14(�6�   57      58      