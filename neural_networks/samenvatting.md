# Neural Networks

## Week 1

#### Amazon Mechanical Turk

Crowdsourcing marketplace waar 'workers' het data labelling voor je doen. Deze workers zijn gewoon werknemers van AMT die taken binnenkrijgen en uitvoeren. Zo lijkt het voor de klant geautomatiseerd, maar gebeurd het in de achtergrond toch door mensen. Op die manier hoef je geen aparte workforce  op te richten, wat veel geld en tijd kost, maar kan de 24/7 workforce van Amazon Mechanical Turk je taken sneller en goedkoper uitvoeren.



#### K-fold cross-validation

Voor machine learning wordt een dataset opgesplitst in een training set en een test set. De training set wordt vervolgens nog eens opgesplitst in een training subset en een validation subset.

Bij K-fold cross-validation, gebeurt deze laatste opsplitsing anders. De training set wordt opgesplitst in _K_ subsets, hierbij wordt iedere subset een keer als validation set genomen en de rest telkens als training subset. De resultaten worden dan samengevoegd tot een beter model, zo wordt de kans op bias verlaagd.

Deze aanpak is handig voor kleinere datasets, maar wordt niet echt gebruikt voor deep learning omdat men hier over zeer veel data spreekt.



#### "Goodness" van een model

- __Tijdens training fase__ 
  ahv Loss Function
  - _Regressie:_ Least Squared Error
  - _Classificatie:_ Logistic regression
- __Tijdens test fase__
  - _Regressie:_ R-squared 
    Er is een relatie met _LSE_ maar is niet hetzelfde!! 
    Hoe hoger, hoe 'beter'
  - _Classificatie:_ Confusion matrix
    - Accuracy, Recall en Precision kennen



#### Wat is een epoch en een batch?

- __Epoch__
  Eén volledige cyclus waarin alle data een keer door het model is gegaan.
- __Batch__ 
  Wanneer de dataset wordt opgedeeld in stukken, spreken we van batches. 
  Zo kunnen de _learnable_ _parameters_ na iedere batch geupdate worden. 



#### Bias vs Variance

Wanneer een model een te hoge __bias__ heeft, zien we _underfittitng_ als resultaat. Dit kan door verschillende oorzaken voorkomen, bijvoorbeeld te weinig features laten meetellen of meer aandact vestigen op enkele features. Dit kan ook voorkomen wanneer de data in de training set biased is (vb 7 kattten, 1 hond).

Wanneer een model een te hoge __variance_ heeft, zien we dan weer _overfitting_ opdagen. Ook dit heeft meerdere mogelijke oorzaken. Als we naar de features kijken kan het zijn dat er te veel features meegeteld worden, denk aan verschillende features die gecorreleerd zijn en dus min of meer gelijkaardige info weergeven. Ook kan dit voorkomen wanneer er te lang wordt getraind met dezelfde data, hiervoor is het eerdergenoemde _K-fold_ _cross-validation_ een mogelijke oplossing.



#### Wat is data imputation?

_Data_ _imputation_ is het aanpassen van _missing_ _values_. Wanneer je dataset groot genoeg, kan je de records met *missing values* gewoon laten wegvallen, maar dat is niet altijd het geval. Wanneer dit niet kan, wordt de missing data ingevuld door een statistisch kengetal (gemiddelde, mediaan, min, max, modus...) of met een regressielijn en interpolatie.



#### Normalization VS Standardization

Bij _normalisatie_, ook wel min-max scaling genoemd, worden alle datapunten samen geduwd naar een waarde tussen 0 en 1, maar de verhoudingen van de datapunten tov elkaar worden hierbij wel behouden. Daarom is deze aanpak zeer gevoelig voor _outliers_.

Ook bij _standaardisatie_ wordt de data hervormd, maar nu door het gemiddelde en de standaard afwijking te herleiden naar 0 en 1 respectievelijk. Op deze manier hebben de _outliers_ een veel minder groot effect.

 

## Week 2

#### Een neuraal netwerk is een hiërarchisch model

Een neuraal netwerk is opgebouwd uit verschillende lagen. HIerbij gaat iedere laag 'simpele' berekeningen doen met de data doorgegeven door de vorige laag, met steeds complexere resultaten als resultaat. Omdat iedere laad dus verderbouwt op de resultaten van de vorige laag, spreken we van een hiërarchisch model.



#### Wat is een affine transformation?

Wanneer we een node uit een neuraal netwerk met zijn parent node en 1 childnode bekijken, kunnen we het bekijken als een perceptron. Zo kunnen we de affiene transformatie hier gaan bekijken. Elke parentnode heeft een zeker waarde, en deze wordt vermenigvuldigt met een zekere _weight_ en vervolgens wordt er nog een zekere bias bij opgeteld. De uitkomst hiervan is de affiene transformatie en wordt de waarde van de huidige node, die gebruikt zal worden voor de affiene transformatie in de vogende laag in het neuraal netwerk.

_Extra:_
Dit kan ook in 1 formule worden gegoten voor alle nodes in een level, door de gewichten van iedere node in een grotere matrix te zetten, en biases in een vector (x bij 1 matrix) en deze matrix vermenigvuldiging uit te rekenen. De uitkomst is dan een vector, waarvan iedere waarde de waarde zal zijn van 1 van de nodes.



#### Verklaar:

__Om een multilayer perceptron, met minstens 1 hidden layer, te laten werken als universal approximator, heb je non-linear activation functions nodig.__

Om een _universal approximator_ te zijn, moet de perceptron alle modellen kunnen mappen. We zien echter dat een lineaire activation function geen non-lineaire modellen kan mappen. Bijgevolg moet de activatiefunctie dus ook non-lineair zijn.



#### De ReLU activation function

De activation function bepaalt de output van de neuronen in een neuraal netwerk. De ReLU function geeft de input-waarde gewoon door als output als de input positief  is, maar bij een negatieve input wordt gewoon nul doorgegeven als output. Verder zullen we zien dat wanneer het moel gaat leren, de gradient van de activation function van belang is. Daarvoor wordt Leaky ReLU geïntroduceerd, hierbij gaan de negatieve waardes vermenigvuldigt worden met een zeer klein getal, waardoor er toch nog een kleine daling te zien is onder nul. Zo blijft het model ook daar leren, zij het veel trager. Een derde optie is eLU, waar de negatieve waardes in een exponentiele functie worden gegoten, waardoor de input waardes die verder van nul liggen minder sterk terug richting nul zullen neigen.



#### De loss function

>  _"How well did we do?"_ 

De Loss function zegt ons hoe we de parameters moeten gaan aanpassen om een (nog) beter resultaat te bekomen.

- _Regressie:_ Afstandsmaat tov de regressielijn
  - (Root) Mean Squared Error, gebruik makend van de euclidische afstand
  - Mean Absolute Error, gebruik makend van de manhattan distance
- _Classificatie:_ Veel ingewikkelder om te zeggen hoe slecht een slecht antwoord is.
  - Softmax function, duwt de classes uit elkaar en geeft weer hoe zeker het model is over zijn beslissing. We kijken naar de output neuronen en vergelijken de waardes ervan met de verwachte waardes. Zo zien we voor iedere neuron hoeveel de bijhorende parameters moeten aangepast worden. 



#### De gradient van de loss function

Hoe moeten de parameters nu gaan aanpassen?
Daarvoor worden de weights aangepast met behulp van de gradient van de loss function. De gradient geeft weer in welke richting (in het n-dimensionale) de loss-function het felst daalt. Aangezien we de loss zo laag mogelijk willen krijgen, zullen de paramaters die richting gebruiken om aangepast te worden:

> 'new weights' = 'old weights' - 'learning rate' * gradient



#### Vanishing gradients

Bij backpropagation gaan we de gradient van de loss function laten terugwerken naar het begin, via de chainrule. Daarom hebben we ook de gradients van de activation functions nodig. Het is daarom dat activation functions zoals sigmoid en tanh niet geschikt waren, de gradients van deze functies gaan in het positieve en het negatieve voor grote waardes naar nul neigen, waardoor deze weights nietmeer zullen aangepast worden, ondanks dat dit wel nodig is. Dankzij de chainrule, waar de gradients van de verschillende lagen met elkaar worden vermenigvuldigt, wordt dit effect nog eens versterkt hoe meer we _backwards_ gaan. (klein getal * klein getal = nog kleiner getal)

De ReLU / eLU / leaky ReLU omzeilen die vanishing gradients!



## Week 3

#### Stochastic gradient descent

Met de _stochastic gradient descent_ wordt _randomness_  als oplossing gebruikt om lokale minima en zadelpunten te vermijden. Door ipv met hele batches te trainen, wordt bij iedere iteratie een random mini-batch gekozen. Op die manier zal het model niet ineens alle data te zien krijgen en vervolgens licht afwijken van de sterkste helling in de volledige data. Door steeds een andere random mini-batch zal er dus meer 'exploration' plaatsvinden en blijf je niet vastzitten op een foutief traject.

Het nadeel is dat er meer computation nodig is, daarom is de grootte van de mini-batches een belangrijke hyperparameter om hier een goed evenwicht in te vinden.



#### Learning rate

De learning rate bepaalt hoe groot de stap zal zijn tijdens de _backward pass_ in de richting van de negatieve gradient. Het is belangrijk om de grootte van deze learning rate juist te houden; te groot en we zitten over het minima, te klein en het duurt veel te lang. Om een goed evenwicht te bekomen worden cycling learning rates gebruikt, een _annealing_ techniek wat wil zeggen dat de learning rate gaat fluctueren tussen hoog en laag. Onderzoek wijst uit dat uit verschillende modellen hiervan de _One cycle_ (kleine learning rate laten stijgen tot een maximum en weer laten dalen, op het einde traag nog verder zakken dan de initiele waarde) het efficientst is, wat erop neer komt dat 1 cyclus wordt doorlopen in een epoch.



#### Regularizatie

- **Weight Decay** _L1 vs L2_ 
  Rust op '_Less is more_', bepaalde gewichten worden 'afgestraft' en gaan minder zwaar meetellen. Zo wordt het model minder complex. 
  L1: constraint blijft een evengrote _penalty_ krijgen, tot deze volledig op 0 staat.
  L2: de _penalty_ is afhankelijk van de grote van de weights, een kleinere weight wordt minder zwaar gestraft.

  L1 kan theoretisch handig zijn wanneer de computationele kracht die vereist wordt te hoog is, in de praktijk wordt haast altijd L2 gebruikt. 

- __Early stopping__
  Het trainen vroegtijdig stoppen wanneer de validation loss niet meer echt daalt of zelfs lichtjes begint te stijgen. Zo wordt voorkomen dat de weights te groot worden.

- __Dropout__
  Tijdens het trainen (enkel dan!) worden de weights van bepaalde nodes weggelaten. Bij iedere iteratie zijn dit andere nodes. Zo zijn de berekeningen minder zwaar, en is er meer veralgemening.
  
- __Ensemble technieken__
  We spreken ven een ensemble techniek wanneer meerdere kleine oplossingen samen worden genomen tot één betere oplossing. Ook hier is duidelijk sprake van generalisatie. Dropout is ook een voorbeeld van een ensemble techniek (steeds trainen met een ander subnetwerk).

- __Data augmentation__
  Data 'bijmaken' door bestaande data te bewerken.
  VB: image draaien (opletten voor verwarring), noise toevoegen, met belichting/contrast/... van een afbeelding spelen...

- __Batch normalization__
  Bij het doorlopen van de verschillende lagen van een deep neural network, kan de distributie van de data vervormd worden. Batch normailzation gaat deze distributie tussenin weer naar de 'sweet spot' trekken. Er is ook weer spraken van regularisatie, want de spreiding zit steeds weer goed zodat alle data weer evenveel belang heeft.

#### Optimizers

Batch normalization is naast een regularisatie techniek ook een optimizer, door de datadistributie steeds weer naar de 'sweet spot' te trekken gaat de gradient accurater zijn.

Een tweede optimizer zijn momentum technieken. Voorbeelden hiervan zijn RMSProp en Adam (de bekendste). Momentum technieken gaan ervoor zorgen dat de (stochastic/mini-batch) gradient descent wordt geoptimaliseerd en het minima dus sneller bereikt wordt.

Een derde vorm van optimizing zijn initializers, technieken om de startverdeling voor de weights bepalen.
Een voorbeeld hiervan is Glorot.

## Week 11

