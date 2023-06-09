export default {
  Trending: [
    {
      id: 331,
      title: 'The intersection of AI and human creativity',
      subtitle:
        'As we stand in a world where AI is rapidly becoming an integral part of the design process, it’s important that we take a step back and think about the implications of this transformative technology.',
      category: 'Trending',
      img: '/images/img1.png',
      description: `
      The question is: how can we keep human creativity in the design process?

      We can start by looking at the nature of creativity itself. Having creativity involves thinking outside the box, connecting seemingly unrelated dots, and coming up with new ideas.
      
      In an ideal scenario, we would maintain a delicate balance between humans and machines to allow them to work in harmony, even as AI augments and enhances our creative work.
      
      Getting humans and AI to work together is one way to keep human creativity alive. Rather than giving up all control, designers can use AI’s capabilities to assist them during different stages of the design process.
      
      A collaborative approach can result in a symbiotic relationship where human intuition and AI-generated suggestions work together.
      
      Consider a graphic designer working on a logo.

AI can suggest several design ideas based on initial input, but the designer can then refine them with their expertise. Instead of taking over the designer’s job, AI acts as a creative partner.

However, it’s important that AI tools respect and complement human creativity, and not undermine it. The goal of AI developers should be to make systems that enhance human decision-making and stimulate original thinking.

Or in other words, AI tools that empower and inspire, rather than replace, can facilitate a future where human creativity thrives.

During this transition, try not to lose sight of human empathy and emotional intelligence in design. AI can generate countless iterations and analyze data fast, but it can’t understand and connect with human emotions.

Designers have an advantage in creating products and experiences that resonate with users on an emotional level because of their shared humanity.

Incorporating empathy and emotional intelligence into the design process ensures that human creativity remains central. The human touch will be more important than ever as we continue to integrate AI into our creative processes.

It’s this creative spark that will continue to set us apart, even as we forge new partnerships with the intelligent machines of the future.

Creation is an integral part of our DNA, a fundamental aspect of what makes us human. We’re as creative as we are social beings, and that shouldn’t change.`,
      published: 'Apr 21,  2023',
      author: {
        name: 'Emmanuel Martin',
        img: '/images/author/author1.jpg',
        designation: 'Author',
      },
    },
    {
      id: 2,
      title: 'Say Goodbye to Chrome: Microsoft Edge’s AI Features Will Blow Your Mind!',
      subtitle:
        'Microsoft Edge has come a long way since it was first launched in 2015. With each passing year, Microsoft has added new features to the browser to enhance user experience.',
      category: 'Machine Learning',
      img: '/images/img2.png',
      description: `
      Microsoft Edge has come a long way since it was first launched in 2015. With each passing year, Microsoft has added new features to the browser to enhance user experience. But it’s the AI features in the latest version of Edge that will blow your mind. In this blog post, we’ll take a look at some of the AI features that Edge has to offer.

      <strong>Password Monitor</strong>

One of the most significant challenges in online security is remembering all of your passwords. The Password Monitor feature in Edge addresses this issue by scanning the internet to see if any of your passwords have been compromised. If it detects any potential security breaches, it will alert you to change your password immediately.

<strong>Immersive Reader</strong>

The Immersive Reader feature in Edge uses AI to make reading online content easier. It can read text aloud, highlight words as they are spoken, and even translate text into different languages. This feature is particularly helpful for people with reading difficulties or those who speak different languages.

<strong>Shopping Assistant</strong>

Shopping Assistant is an AI-powered feature in Edge that helps you save money while shopping online. It compares prices across multiple online retailers and offers coupons and promo codes to help you save even more. This feature can save you time and money while shopping online.

<strong>NewsGuard</strong>

NewsGuard is a feature in Edge that uses AI to identify trustworthy news sources. It gives each website a trust score based on factors such as accuracy, transparency, and accountability. This feature helps users avoid fake news and disinformation online.

<strong>Collections</strong>

Collections is a feature in Edge that helps you organize your online research. It uses AI to identify related content across different websites and allows you to save that content in a single location. Collections can save you time and help you stay organized while conducting research online.

<strong>InPrivate mode</strong>

InPrivate mode in Edge allows you to browse the internet without leaving any trace on your device. This feature is particularly useful if you’re using a shared computer or browsing sensitive content. The AI-powered feature ensures that your online activity remains private and secure.

<h1><strong>Conclusion</strong></h1>
Microsoft Edge’s AI features are impressive and offer a range of benefits to users. From password monitoring to shopping assistance and news verification, Edge’s AI features can enhance your online experience. Whether you’re a student, researcher, or just a casual internet user, Edge’s AI features are worth exploring.
            `,
      published: 'Apr 23,  2023',
      author: {
        name: 'Emmanuel Martin',
        img: '/images/author/author1.jpg',
        designation: 'Author',
      },
    },
    {
      id: 3,
      title: 'Spotify Data Visualization',
      subtitle:
        'Incorporate different types of visualizations ranging from time series analysis to word clouds',
      category: 'Tech',
      img: '/images/img3.png',
      description: `This is a Data Visualization project in R.

      <h1><strong>Setting up the project </strong></h1>      
      You can download the dataset here <a target="_blank" href="https://www.kaggle.com/datasets/yamaerenay/spotify-dataset-19212020-600k-tracks">Kaggle Spotify Dataset</a> 
      
      The dataset consists of two csv files giving information about — artist and tracks. The data ranges from 1920 to 2020. Since we have many artists who have not uploaded any tracks, the numer of rows in the artists file is double that of the tracks file. We have combined the two files using an inner join.

      I have divided the project into 3 domains.
      <ul>
      <li>Trend Analysis</li>
      <li>Feature Analysis</li>
      <li>Time Series Analysis</li>
      </ul>
      There are a total of 12 visualizations, four in each category.
      
      <strong>Importing the dataset</strong>

      Firstly we import all the required libraries for the visualization.
      <pre>
      {r loading libraries, include=TRUE,message=FALSE,warning=FALSE}
      library(knitr)
      library(dplyr)
      library(tidyr)
      library(stringr)
      library(tidyverse)
      library(reshape2)
      library(ggplot2)
      library(Hmisc)
      library(magrittr)
      library(lubridate)
      </pre>

      Reading the csv files into respective dataframes.
      <pre>
      {r reading data, include=TRUE,message=FALSE,warning=FALSE}
      df1=read.csv("tracks.csv")
      df=read.csv("artists.csv")
      </pre>

      Cleaning the data
      <pre>
      {r data cleaning begins, include=TRUE,message=FALSE,warning=FALSE}
      #removing the brackets to unnest the the list of values from the artist_id
      df1$id_artists = gsub("\\[", "", df1$id_artists)
      df1$id_artists = gsub("\\]", "", df1$id_artists)
      #splitting using the delimmeter ","
      df1$id_artists = strsplit(df1$id_artists, ",")
      df3 = tidyr::unnest(df1, id_artists)
      df3$id_artists = gsub("'", "", df3$id_artists)
      </pre>

      Merging the two files using inner join
      <pre>
      {r using inner join to merge two csv files, include=TRUE,message=FALSE,warning=FALSE}
      #using inner join joinning two table, artist and tracks
      spotify_data <- inner_join(df3, df, by=c('id_artists'='id' ))
      </pre>

      Renaming all the parameters accordingly. I have shown two of the parameters here.
      <pre>
      {r  renaming columns in new dataframe, include=TRUE,message=FALSE,warning=FALSE}
      spotify_data <-  spotify_data %>% rename("track_id" = "id")
      spotify_data <- spotify_data %>% rename("track_name" = "name.x")
      </pre>

      Some more data cleaning
      <pre>
      {r data cleaning, include=TRUE,message=FALSE,warning=FALSE}
      # adding a new attribute - track duration in minutes 
      spotify_data_cleaning <- spotify_data_cleaning %>% mutate(track_time = track_duration/60000)
      spotify_data_cleaning <- spotify_data_cleaning %>% rename("track_time_mins" = "track_time")
      # checking if any of the rows have all NA values
      spotify_data_cleaning[rowSums(is.na(spotify_data_cleaning))!=ncol(spotify_data_cleaning), ]
      # data column is not consist and has values like 1922 and 1922-01-01, in order to bring consistency we are adding "-01-01" to the dates given without month and day information
      # date data ranges from 1921 - 2020
      dates <- spotify_data_cleaning$track_release_date
      dates <- as.POSIXct(dates, format = "%Y-%m-%d")
      # first convert 1922 to 1922-01-01 and then convert it to date format and specify time zone
      date_data <- spotify_data_cleaning$track_release_date
      fixed_date <- gsub("1922","1922-01-01",date_data)
      spotify_data_cleaning$track_release_date <- ifelse(nchar(spotify_data_cleaning$track_release_date) == 4, paste0(spotify_data_cleaning$track_release_date, "-01-01"), spotify_data_cleaning$track_release_date)
      spotify_data_cleaning$track_release_date <- ymd(spotify_data_cleaning$track_release_date)
      # release date done cleaning
      # adding the changes to the original dataframe
      spotify_data <- spotify_data_cleaning
      </pre>

      Since all the parameters are not equally scaled, we perform data scaling and bring the required features in the range of 0–1
      <pre>
      {r scaling track features, include=TRUE,message=FALSE,warning=FALSE}
      # since the rest of the attributes have mean != 0, we think the best scaling approach should be min/max scaling
      # min_max_scaled <- (data - min(data)) / (max(data) - min(data))
      #track_key
      key_min <- min(spotify_data_cleaning$track_key)
      key_max <- max(spotify_data_cleaning$track_key)
      key_range <- key_max - key_min
      spotify_data_cleaning$track_key <- (spotify_data_cleaning$track_key - key_min)/key_range
      #track_loudness
      loudness_min <- min(spotify_data_cleaning$track_loudness)
      loudness_max <- max(spotify_data_cleaning$track_loudness)
      loudness_range <- loudness_max - loudness_min
      spotify_data_cleaning$track_loudness <- (spotify_data_cleaning$track_loudness - loudness_min)/loudness_range
      #track tempo
      tempo_min <- min(spotify_data_cleaning$track_tempo)
      tempo_max <- max(spotify_data_cleaning$track_tempo)
      tempo_range <- tempo_max - tempo_min
      spotify_data_cleaning$track_tempo <- (spotify_data_cleaning$track_tempo - tempo_min)/tempo_range
      # track_time_signature
      ts_min <- min(spotify_data_cleaning$track_time_signature)
      ts_max <- max(spotify_data_cleaning$track_time_signature)
      ts_range <- ts_max - ts_min
      spotify_data_cleaning$track_time_signature <- (spotify_data_cleaning$track_time_signature - ts_min)/ts_range
      spotify_data_cleaning <- spotify_data_cleaning[complete.cases(spotify_data_cleaning[,"track_release_date"]), ]
      # summary(spotify_data_cleaning)
      spotify_data <- spotify_data_cleaning
      </pre>

      Now that we have cleaned and scaled the data. Let’s dive into visualization.

      <h1><strong>Trend Analysis:</strong></h1>
      1. Number of tracks on Spotify categorized year-wise

      <img src="../images/blog_data/spotify_api_visualisation/1hkCFS4W12n-PCSuCFjV8uA.png">
      The aim of this visualization is to provide aquick and simple way to see how the number of tracks released by Spotifyhas changed over the years, broken down by decade. By seeing the size ofeach slice, it should be easy to quickly compare the number of tracksreleased in different decades and get an overall understanding of thedata. The donut chart depicts the evolution of the number of tracksreleased on Spotify, starting with 5304 tracks in 2006 and steadilyrising to 12331 tracks in 2020. However, there was a slight decrease inthe number of tracks released in 2017, which was almost a thousand lessthan the previous year.
      
      <pre>
        {r graph plots begin - donut chart, include=TRUE,message=FALSE,warning=FALSE}
        spotify_performance <- spotify_data %>% 
                      mutate(track_release_date = ymd(track_release_date))%>%
                      filter(track_release_date > ymd("2006-01-01"))
        spotify_performance[c('Year','Month','Date')]<-str_split_fixed(spotify_performance$track_release_date,"-",3)
        spotify_performance_plot <- spotify_performance[,c(2,3)]
        spotify_performance <- spotify_performance %>% 
                        group_by( Year) %>%
                        summarise(no_of_songs = n())
        spotify_performance <- filter(spotify_performance, Year < "2021")
        # Compute percentages
        spotify_performance$fraction <- spotify_performance$no_of_songs/sum(spotify_performance$no_of_songs)
        # Compute the cumulative percentages (top of each rectangle)
        spotify_performance$ymax = cumsum(spotify_performance$fraction)
        # Compute the bottom of each rectangle
        spotify_performance$ymin = c(0, head(spotify_performance$ymax, n=-1) )
        #compute label position
        spotify_performance$labelPosition <- (spotify_performance$ymax+spotify_performance$ymin)/2
        #compute label
        spotify_performance$label <- paste(spotify_performance$Year, "value: ", spotify_performance$no_of_songs)
        colors=rainbow(15)
        ggplot(spotify_performance, aes(ymax = ymax, ymin=ymin, xmax=4, xmin=3,fill=Year))+
        geom_rect()+
        geom_label(x=3.5, aes(y=labelPosition, label=label), size=3.5) +
        coord_polar(theta = "y")+
        xlim(c(2,4))+
        ggtitle("Trends of tracks released on Spotify")+
        theme_void() +
        theme(legend.position = "none") + scale_fill_manual(values = c("#9400D3","#FF69B4","#FFC0CB","#FFA07A","#E0FFFF","#ADD8E6","#87CEFA","#1E90FF","#20B2AA","#90EE90","#00FF7F","#7FFF90","#7FFF00","#DAA520","#FFD700"))
</pre>
        The number of tracks uploaded on Spotify for each year has been consistently increasing. In 2013 we see a more than regular increase in the number of tracks being uploaded and the reason is, the prices of compact disc began to increase during the same time frame. This was combined with the growing popularity of streaming platforms. Next we saw a drop in the number of tracks uploaded for the first time in 2017. The reason for this is unclear. However, from what we know, Spotify went public in 2018 and recorded the largest ever operational costs in its history in 2017 due to worldwide expansion.
        
        2. Comparing sentiments of the tracks released on Spotify before and during COVID-19
        
        Hypothesis: Covid-19, also known as the novel coronavirus, ahighly infectious respiratory illness swept across the world, affectingmillions of people and causing widespread panic and disruption. The Covid-19 pandemic has had a profound impact on every aspect of life,from the economy and public health to the music industry. The pandemicnot only affected physical health but also had a significant impact onmental health, particularly in terms of depression. Thus, we conducted an experiment to find the type of tracks released by Spotify in theyears 2019 and 2020.

        Aim: Do a comparative study for the years 2019 and 2020 inorder to find a relation between the type of songs released on Spotify and people’s mental health.
        
        <img src="../images/blog_data/spotify_api_visualisation/161foaCO9ugTiS5AaTLE9Rw.png">
        <pre>
        {r covid graph boxplot with jitters, include=TRUE,message=FALSE,warning=FALSE}
        spotify_pandemic <- spotify_data %>% 
                      mutate(track_release_date = ymd(track_release_date))%>%
                      filter(track_release_date > ymd("2019-01-01") & 
                               track_release_date < ymd("2020-12-31"))
        spotify_pandemic <- spotify_pandemic %>% group_by(track_release_date,track_valence)
        spotify_pandemic$mood <- ifelse(spotify_pandemic$track_valence > 0.5, "Happy","Sad")
        spotify_pandemic$covid_year <- ifelse(spotify_pandemic$track_release_date < "2020-01-01", "Before Covid","Covid")
        ggplot(spotify_pandemic, aes(x = covid_year, y = track_valence, colour = mood)) + 
        geom_boxplot(outlier.shape = NA) +
        geom_jitter()+ggtitle("Comparing Emotional Tone in Music Before and During the COVID-19 Pandemic")
  </pre>
  The above graph is a boxplot with jitters plottedfor two time periods — pre-covid and covid. In order to analyze therelation between type of tracks and the pandemic we have made use of themetric — valence. Valence — A measure from 0.0 to 1.0 describing the musicalpositiveness conveyed by a track. Tracks with high valence sound morepositive (e.g. happy, cheerful, euphoric), while tracks with low valencesound more negative (e.g. sad, depressed, angry). During our analysis we found correlation between valence and other features. There is significant correlation between the following pairs.
  <ul style="list-style: none !important;">
  <li>1) valence — danceability</li>
  <li>2) valence — loudness</li>
  <li>3) valence — energy</li>
  </ul>Contrary to our belief we see no significant change in the type of tracks released on Spotify. Hence, our hypothesis was incorrect.
    
  3. What drives popularity of a track? Can we predict the trend of a track released on Spotify?

  <img src="../images/blog_data/spotify_api_visualisation/12c8qk5j61Nf6_9FckiPbKg.png">
  <pre>
  {r HEXBIN PLOT, include=TRUE,message=FALSE,warning=FALSE}
  spotify_track_artist <- spotify_data[,c(3,21,24)]
  # colnames(spotify_track_artist)
  # Load the hexbin library 
  library(hexbin)
  # Create the hexbin object
  hexbin_obj <- hexbin(y = spotify_track_artist$track_popularity, x = spotify_track_artist$artist_popularity, xbins = 15)
  # Create the hexbin plot
  ggplot(data = spotify_track_artist, aes(x=spotify_track_artist$artist_popularity,y=spotify_track_artist$track_popularity))+geom_hex(bins=18)+
  scale_fill_gradient(low = "white", high = "red")+
  labs(title = " Hexbin Plot for track popularity vs artist popularity", x="artist popularity",y = "track popularity")
  </pre>
  This Hex Binplot helps us in understanding the relation between the popularity of a track and the popularity of an artist. Hexbin plots take in lists of X and Y values and returns what lookssomewhat similar to a scatter plot, the entire graphing space has beendivided into hexagons (like a honeycomb) and all points have beengrouped into their respective hexagonal regions with a color gradientindicating the density of each hexagonal area. From this graph we undestand that highest majority of the artists have very low or negligible popularity and hence popularity of theirtracks is low. At the same time, artists with high popularity have hittracks. Thus if a new song is released on Spotify, given that the track artist is popular the track has a good chance of becoming a hit.

  <strong>Feature Analysis</strong>

  1. Relationship between the features of a track

  <img src="../images/blog_data/spotify_api_visualisation/12NraygWYZhfbTg63k8UNWw.png">
  <pre>
  {r heatmap - graph-1 relation between song characteristics, include=TRUE,message=FALSE,warning=FALSE,echo=FALSE}
  df_sample=spotify_data_cleaning%>%select(track_danceability:track_time_signature)
  library(ggplot2)
  library(reshape2)
  library(plotly)
  correlation_matrix <- cor(df_sample)
  # Melt the correlation matrix into a dataframe
  melted_correlation_matrix <- melt(correlation_matrix)
  melted_correlation_matrix<-melted_correlation_matrix%>%rename("Track_characteristics"="Var1")
  melted_correlation_matrix<-melted_correlation_matrix%>%rename("Track_characteristics_1"="Var2")
  # Plot the heatmap
  p<-ggplot(data=melted_correlation_matrix, aes(x=Track_characteristics, y=Track_characteristics_1, fill=value)) + 
    geom_tile(color="black") + geom_text(aes(label = value), color = "black", size = 1)+
    scale_fill_gradientn(colors = hcl.colors(3, "RdYlGn")) + 
    theme_minimal() + 
    theme(axis.text.x = element_text(angle = 90, vjust = 0.5, size = 12, hjust=1))+ggtitle("Feature Analysis - Correlation Matrix") 
    coord_fixed()#for square tiles i have use coord_fixes() and heatmap can be formed with the geom_title itself
  ggplotly(p)
</pre>
We see a significant correlation between

a) i) valence — energy ii) valence — danceability iii) valence — loudness

b) Energy — Loudness The track loudness and energy are directly proportional.

c) What factors contribute to the tracks popularity for a popular artist? Track characteristics do not play a significant role in determining the popularity of an artist’s tracks.

d) Popular tracks of a leading artist Word cloud visualization indicates that the track titles “hold_on” and “anyone” appear frequently for the artist Justin Bieber.

e) What variation in track characteristics can be observed across the top 10 music genres? The “kleine hoerspie” genre possesses the highest values for several track features, including “track_danceability,” “track_energy,” “track_key” , “track_loudness,” “track_mode,” “track_speechiness,” and “track_acousticness.” This allows us to observe the variations in each track characteristic among the top 10 music genres.

Analyzing the correlation between energy and loudness further.

<img src="../images/blog_data/spotify_api_visualisation/1WiSsbRqney1RbESoj59PtA.png">
<pre>
  {r scatterplot to show correlation between track loudness and energy,include=TRUE,message=FALSE,warning=FALSE}
  library(ggplot2)
  library(RColorBrewer)
  ggplot(data=spotify_data, aes(x=track_loudness, y=track_energy, color=track_mode)) + 
     geom_point(size=1) + 
     # scale_color_gradientn(colors=magma(5)) + 
     theme(legend.position="none")+ggtitle("Correlation between track energy and track loudness")
</pre>
The plot showcases the correlation between different characteristicsof the song tracks, indicating how they are related to one another. Ifthe values are close to 1, then the features are positively correlatedand are depicted in green, such as between “track_loudness” and”track_energy.” On the other hand, if the values are close to -1, then the features are negatively correlated and are shown in red, forinstance, between “track_acousticness” and both “track_energy” and”track_loudness”.

2. What factors contribute to the popularity of the track of a popular artist?

<img src="../images/blog_data/spotify_api_visualisation/12pluvm7MtvALARz0qYrvDA.png">
<pre>
  {r , include=TRUE,echo=FALSE,message=FALSE,warning=FALSE}
  df_s=spotify_data_cleaning%>%filter(artist_popularity==max(artist_popularity))
  df_s[c('Year','Month','Date')]<-str_split_fixed(df_s$track_release_date,"-",3)
  df_s
  df_s$track_popularity <- df_s$track_popularity /100
  p1<-ggplot(df_s, aes(x =track_popularity , y = track_loudness)) +
    geom_line() +
    scale_color_discrete(name = "track_popularity") +
    xlab("track_popularity") +
    ylab("Variable 2") +
    ggtitle("Scatter Plot of track_popularity and track_loudness")+ geom_smooth(formula = y ~ x,method = "lm")
  p2<-ggplot(df_s, aes(x =track_popularity , y = track_danceability)) +
    geom_line() +
    scale_color_discrete(name = "track_popularity") +
    xlab("track_popularity") +
    ylab("track_danceability") +
    ggtitle("Scatter Plot of track_popularity and track_danceability")+ geom_smooth(formula = y ~ x,method = "lm")
  p3<-ggplot(df_s, aes(x =track_popularity , y = track_energy)) +
    geom_line() +
    scale_color_discrete(name = "track_popularity") +
    xlab("track_popularity") +
    ylab("track_energy") +
    ggtitle("Scatter Plot of track_popularity and track_energy")+ geom_smooth(formula = y ~ x,method = "lm")
  p4<-ggplot(df_s, aes(x =track_popularity , y = track_valence)) +
    geom_line() +
    scale_color_discrete(name = "track_popularity") +
    xlab("track_popularity") +
    ylab("track_valence") +
    ggtitle("Scatter Plot of track_popularity and track_valence")+ geom_smooth(formula = y ~ x,method = "lm")
  p5<-ggplot(df_s, aes(x =track_popularity , y = track_tempo)) +
    geom_line() +
    scale_color_discrete(name = "track_popularity") +
    xlab("track_popularity") +
    ylab("track_tempo") +
    ggtitle("Scatter Plot of track_popularity and track_tempo")+ geom_smooth(formula = y ~ x,method = "lm")
  p6<-ggplot(df_s, aes(x =track_popularity , y = track_instrumentalness)) +
    geom_line() +
    scale_color_discrete(name = "track_popularity") +
    xlab("track_popularity") +
    ylab("track_instrumentalness") +
    ggtitle("Scatter Plot of track_popularity and track_instrumentalness")+ geom_smooth(formula = y ~ x,method = "lm")
  p7<-ggplot(df_s, aes(x =track_popularity , y = track_acousticness)) +
    geom_line() +
    scale_color_discrete(name = "track_popularity") +
    xlab("track_popularity") +
    ylab("track_acousticness") +
    ggtitle("Scatter Plot oftrack_popularity and track_acousticness")+ geom_smooth(formula = y ~ x,method = "lm")
  p8<-ggplot(df_s, aes(x =track_popularity , y = track_speechiness)) +
    geom_line() +
    scale_color_discrete(name = "track_popularity") +
    xlab("track_popularity") +
    ylab("track_speechiness") +
    ggtitle("Scatter Plot of Two Continuous Variables and track_speechiness")+ geom_smooth(formula = y ~ x,method = "lm")
  p9<-ggplot(df_s, aes(x =track_popularity , y = track_mode)) +
    geom_line() +
    scale_color_discrete(name = "track_popularity") +
    xlab("track_popularity") +
    ylab("track_mode") +
    ggtitle("Scatter Plot of track_popularity and track_mode")+ geom_smooth(formula = y ~ x,method = "lm")
  p10<-ggplot(df_s, aes(x =track_popularity , y = track_key)) +
    geom_line() +
    scale_color_discrete(name = "track_popularity") +
    xlab("track_popularity") +
    ylab("track_key") +
    ggtitle("Scatter Plot of track_popularity and track_key")+ geom_smooth(formula = y ~ x,method = "lm")
  p11<-ggplot(df_s, aes(x =track_popularity , y = track_liveness)) +
    geom_line() +
    scale_color_discrete(name = "track_popularity") +
    xlab("track_popularity") +
    ylab("track_liveness") +
    ggtitle("Scatter Plot of track_popularity and track_liveness")+ geom_smooth(formula = y ~ x,method = "lm")
  library(gridExtra)
  library(grid)
  grid.arrange(p1,p2, p3, p4 ,p5,p6,p7,p8,p9,p10,p11,nrow=4, ncol=3)
</pre>
The line graph indicates that track characteristics do not play asignificant role in determining the popularity of an artist’s tracks.

3. What is the occurrence rate of track names for a leading artist?​

<img src="../images/blog_data/spotify_api_visualisation/1HCZOccs8KWgY9OynrQOKuw.png">
<pre>
      {r graph-4 analysing frequency of tracks names of an popular artist over the years using wordcloud,include=TRUE,message=FALSE,warning=FALSE}
      df_s_1=spotify_data_cleaning
      df_s_1[c('Year','Month','Date')]<-str_split_fixed(df_s_1$track_release_date,"-",3)
      df_s_1<-df_s_1%>%filter(artist_popularity==max(artist_popularity))
      df_s_1_grp<-df_s_1%>%filter(artist_popularity==max(artist_popularity))%>%group_by(track_name)%>%summarise(total_popularity=sum(track_popularity))
      c<-df_s_1%>%group_by(track_name)%>%summarise(num=n())
      df_s_1 <- df_s_1 %>%
          mutate(track_name = gsub(" ", "_", track_name))
      #install.packages("tm")
      library(tm)
      #Create a vector containing only the text
      text <- df_s_1$track_name
      # Create a corpus  
      docs <- Corpus(VectorSource(text))
      dtm <- TermDocumentMatrix(docs) 
      matrix <- as.matrix(dtm) 
      words <- sort(rowSums(matrix),decreasing=TRUE) 
      df <- data.frame(word = names(words),freq=words)
      set.seed(1234) # for reproducibility 
      #install.packages("wordcloud")
      library(wordcloud)
      #install.packages("RColorBrewer")
      library(RColorBrewer)
      suppressWarnings(wordcloud(words = df$word, freq = df$freq, min.freq = 1,
                                max.words=500, random.order=FALSE, rot.per=0.35,
                                colors=brewer.pal(8, "Dark2")))
</pre>      

The word cloud visualization indicates that the track titles “hold_on”and “anyone” appear frequently for the artist Justin Bieber. The fontsize in the word cloud allows us to determine which track titles occur most frequently and which do not. Hence, the word cloud visual provides information about the occurrence rate of track names for a leading artist.

4. What variation in track characteristics can be observed across the top 10 music genres?

<img src="../images/blog_data/spotify_api_visualisation/1SQAQulvnWzB62WabTV0R_g.png">

<pre>
        {r graph-2 stacked bar graph how the track characteristics changes based on genres(top),include=TRUE,message=FALSE,warning=FALSE}
        library(dplyr)
        library(tidyr)
        library(stringr)
        library(tidyverse)
        library(reshape2)
        genre_data <- spotify_data_cleaning%>%filter(artist_genres!="[]")%>%group_by(artist_genres)%>%summarise(sum_popularity = sum(track_popularity))%>%top_n(10, sum_popularity)%>%arrange(desc(sum_popularity))%>%rename(genres=artist_genres)
        df_sample=spotify_data_cleaning%>%select('track_danceability','track_energy','track_key','track_loudness','track_mode','track_speechiness','track_acousticness','track_instrumentalness','track_liveness','track_valence','track_tempo','track_time_signature','artist_genres')
        long_df <- melt(df_sample, id.vars = "artist_genres")
        grouped_df <- long_df %>%group_by(artist_genres,variable) %>%summarise(average = mean(value))
        df_sample_1<-inner_join( genre_data,grouped_df, by=c('genres'='artist_genres' ))
        colors <- c("#0429b3", "#2853b2", "#3c76b1", "#5199b0", "#65bcaf", "#79dfae", "#8df2ad", "#a1f5ac", "#b5f8ab", "#c9fbaa", "#deffa9", "#f2ffa8")
        #colors <- c("#0a3d91", "#186faf", "#2da4d4", "#48c7e0", "#63e1eb", "#7ff5f5", "#9bf9ff", "#b7feff", "#d2ffff", "#edffff", "#f7f7f7", "#ffffff")
        p<-ggplot(df_sample_1, aes(x =genres, y = average, fill = variable)) +
          geom_bar(stat = "identity") +
          ggtitle("Stacked Bar Plot of Two Categorical Variables and One Continuous Variable") +
          xlab("genres") +
          ylab("average")+
          theme(axis.text.x = element_text(angle = 90, vjust = 1, hjust=1))+scale_fill_manual(values = colors)
        ggsave("plot.png", p, width = 10, height = 10, units = "in")
        p
</pre>
According to the Stacked bar chart, it can be noted that the “kleinehoerspie” genre possesses the highest values for several track features,including “track_danceability,” “track_energy,” “track_key,””track_loudness,” “track_mode,” “track_speechiness,” and”track_acousticness.” This allows us to observe the variations in eachtrack characteristic among the top 10 music genres.

Time Series Analysis

1. What is the inclination of Spotify users towards particular artists, and does the year of release play a role in shaping these preferences?

<img src="../images/blog_data/spotify_api_visualisation/1rsl8boxUnwX2pNqxF7AEaQ.png">
<pre>
    {r,include=TRUE,message=FALSE,warning=FALSE}
    spotify_data$track_release_year = substr(spotify_data$track_release_date, 1, 4)
    spotify_data$track_release_year<- as.numeric(spotify_data$track_release_year)
    library(ggplot2)
    library(dplyr)
    # Group the data by decades
    spotify_data_grouped <- spotify_data %>%
      mutate(track_release_decade = as.integer(floor(track_release_year / 10) * 10)) %>%
      group_by(track_release_decade)
    spotify_data_grouped$track_release_decade<- as.numeric(spotify_data_grouped$track_release_decade)
    spotify_data_grouped<- spotify_data_grouped[complete.cases(spotify_data_grouped), ]
    spotify_data_grouped <- subset(spotify_data_grouped,track_release_decade!=1900 )

    library(ggplot2)
    df_filtered_1 <- spotify_data_grouped %>% 
      distinct(artist_name, .keep_all = TRUE)
    # Get the top 5 artists by popularity for each decade
    df_top5_artist <- df_filtered_1 %>%
      group_by(track_release_decade) %>%
      top_n(5, artist_popularity) %>%
      ungroup()
    # Plot the dot plot
    ggplot(df_top5_artist, aes(x = reorder(artist_name, track_release_decade), y = artist_popularity)) +
      geom_point(aes(color = as.factor(track_release_decade))) +
      scale_color_discrete(name = "Release Decade") +
      ggtitle("Top 5 Unique Artists by Popularity for Each Decade (1920-2020)") +
      xlab("Artist Name") +
      ylab("Popularity") +
      coord_flip()
</pre>
We plot the top 5 artists in each decade between 1920–2020. This plot also shows an increase in popularity for artists in more recent yearscompared to those in the early ones.This could be due to a few differentfactors such as the evolution of the music industry in terms of genrepreferences, better technology used to create music, globalization ofpopular genres, etc.

2. What is the inclination of Spotify users towards different genres of music? Does the decade that this genre originatedhave an impact on whether people still listen to it?

<img src="../images/blog_data/spotify_api_visualisation/1CFu6-S_1qB7qoISKm2X63Q.png">      
<pre>
    {r,include=TRUE,message=FALSE,warning=FALSE}
    genre_data <- spotify_data_grouped %>%
      mutate(artist_genres = str_remove_all(artist_genres, "[\\[\\]']")) %>%
      separate_rows(artist_genres, sep = ",")
    genre_data$artist_genres <- ifelse(genre_data$artist_genres == "", NA, genre_data$artist_genres)
    genre_data<- genre_data[complete.cases(genre_data), ]
    genre_data <- group_by(genre_data, track_release_decade, artist_genres)
    genre_data <- summarise(genre_data, popularity = mean(artist_popularity))
    genre_data <- genre_data %>%
      group_by(track_release_decade) %>%
      top_n(5, popularity)
    

    {r,include=TRUE,message=FALSE,warning=FALSE}
    ggplot(genre_data, aes(x = track_release_decade, y = reorder(artist_genres, track_release_decade), fill = popularity)) + 
      geom_tile() + 
      xlab(label ="Decade")+
      ylab(label ="Genre")+
      scale_x_continuous(breaks=seq(1920, 2020, by=10)) +
      scale_fill_gradient(name = "Popularity",low = "green", high = "black") + 
      theme_minimal()
  </pre>  
  We plot the top 5 genres by popularity that originated in each decadebetween 1920–2020. What is interesting to note is that the most populargenres of all time on Spotify are those that originated in the 2000s. From the previous plot(PLOT1), we saw that artists of older decades didnot fare well in terms of popularity, but the same trend does not applyto genres. This shows that artists of recent years have adapted older genres into their style of music to make it more appealing to theaudience.

3. What is the popular attitude towards explicit contentin music?

<img src="../images/blog_data/spotify_api_visualisation/120-R_qFleF39vY1iDbqq4Q.png">
<pre>
    {r,include=TRUE,message=FALSE,warning=FALSE}
    grouped_data <- spotify_data_grouped %>% 
      group_by(track_release_decade) %>% 
      summarise(mean_popularity = mean(track_popularity),
                mean_explicit = mean(track_explicit))
    ggplot(grouped_data, aes(x = track_release_decade, y = mean_explicit, fill = mean_popularity)) + 
      geom_col(show.legend = FALSE) + 
      scale_fill_gradient(low = "green", high = "black") +
      scale_x_continuous(breaks=seq(1920, 2020, by=10)) +
      labs(x = "Decade", y = "Mean Explicitness", 
          title = "Explicitness of Music Over the Decades",
          subtitle = "1920-2020") + 
      theme_minimal()
</pre>
To understand this better, we plot the mean for explicitness over the decades from 1920–2020. The mean in this case would represent the proportion of 1s (explicit) in the data set. So, for a given decade, if the mean of the explicitness variable is 0.6, this would mean that 60% of the tracks in the data set for that decade are explicit. By aggregating the mean explicitness per decade, we can see how the proportion of explicit tracks has changed over time and whether there are any trends or shifts in attitudes towards explicit content. This shows us that the cultural attitude towards explicit music and an artist’s freedom of expression has increased largely, with most popular songs in the recent decades of the 2000s having popular tracks with explicit lyrics.

To further understand the portion of explicit lyrics in top songs of the artists that have dominated each decade of release, we plot the explicitness for the top song of each artist by decade.

<img src="../images/blog_data/spotify_api_visualisation/1KDvkXFEX-0q6LnQLCmnNZA.png">
<pre>
    {r,include=TRUE,message=FALSE,warning=FALSE}
    top5_artist_song <- df_top5_artist %>% 
      group_by(track_release_decade, artist_name) %>% 
      top_n(1,track_popularity) %>% 
      ungroup()
    top5_artist_song$track_explicit <- ifelse(top5_artist_song$track_explicit == 0, "no", "yes")
    ggplot(top5_artist_song, aes(x = track_release_decade, y = reorder(artist_name, track_release_decade), color = track_explicit)) + 
      geom_point(size = 2) + 
      scale_color_manual(values = c("green", "black"), guide = FALSE) + 
      labs(x = "Decade", y = "Artist Name", color = "Explicitness") + 
      ggtitle("Explicitness of the Top Songs of Top 5 Artists based on the Decade the song was released") + 
      theme_minimal()
</pre>
We notice that most popular artists of recent decades do not in facthave explicit lyrics in their top tracks. This shows us that thoughexplicit music is popular, it is not a necessity for the success of thesong. This could be due to various factors such as the demographic ofthe audience, Spotify’s recommendation algorithms, etc.

<h1><strong>Conclusion</strong></h1>
data visualization project based on Spotify’s track data has revealed several interesting insights into the music industry. Through the use of various graphical representations, we were able tounderstand the distribution of different audio features of songs, thepopularity of different genres, and the trend of listening behavior overtime. Our findings showed that danceability, energy, and tempo areimportant factors that contribute to the popularity of a song, whilehip-hop and pop music are the most streamed genres on Spotify. Moreover, we observed a steady growth in the number of streams over the years,indicating an increasing trend in the usage of Spotify and digital music streaming services.

`,
      published: 'Apr 22,  2023',
      author: {
        name: 'Emmanuel Martin',
        img: '/images/author/author1.jpg',
        designation: 'Author',
      },
    },
    {
      id: 4,
      title: 'The 2023 Web Developer Roadmap',
      subtitle:
        'Learn to become a Frontend, Backend, Fullstack, or DevOps developer with this visual guide — no CS degree required        ',
      category: 'Web Development, Education',
      img: '/images/img4.png',
      description: `
      There has never been a better time to learn to code or make a career change to software engineering. The demand for web developers is at an all-time high, and it’s only increasing. There are both free and premium tutorials online that teach you the skills to get a job as a developer — no CS degree required.

      <h1><strong>Table of Contents</strong></h1><ul style="list-style: a !important;">
        <li>The Basics</li>
        <li>Introduction to Programming</li>
        <li>Frontend Development</li>
        <li>Backend Development</li>
        <li>DevOps Engineering</li>
        <li>Javascript and Coding In-depth</li>
        <li>Software Engineering Books</li>
        <li>Land your dream job</li>
      </ul>These are all products that I personally recommend. For some of them, I do receive compensation if you use the links in the article. If you do find something you like, your support is appreciated.
      
      <h1><strong>1. The Basics</strong></h1>
      We will start with skills every developer needs to learn, and these will be used in all the paths — Frontend, Backend, or DevOps.

To be effective as a developer, you should be proficient with the command line, know how to version control your code with Git, and understand the fundamentals of the web.
            
<strong>Command Line</strong>
The command line is how you run your code. You must be able to navigate and execute the required commands. The better you are on the command line, the more efficient you will be as a developer.
<ul>
        <li><a href="https://www.learnenough.com/command-line-tutorial">Learn Enough Command Line to Be Dangerous</a> — an excellent free book to learn the command line.</li>
        <li><a href="https://www.udemy.com/course/linux-command-line-volume1/?LSNPUBID=q15T%2FSfRF14&ranEAID=q15T%2FSfRF14&ranMID=39197&ranSiteID=q15T_SfRF14-azCj9uKDlSUKC0f8NSsN5A">Linux Command Line Basics</a></li>
        <li><a href="https://www.amazon.com/Linux-Command-Line-Complete-Introduction-ebook-dp-B006X2QEQS/dp/B006X2QEQS/ref=as_li_ss_tl?_encoding=UTF8&me=&qid=1547993668&linkCode=sl1&tag=treyhuffine-20&linkId=b61dc0dc566d4a8e99a290525fb7262a&language=en_US">The Linux Command Line: A Complete Introduction</a></li>
      </ul><strong>Pick a Text Editor</strong>
VS Code is the is the top choice for web developers, which makes it a great place to start — it’s personally what I use. It is free and open source, with tons of plugins to make you more productive. However, there are many excellent options available such as Atom, WebStorm, or Vim (for the hardcore).

The text editor is where you will write all your code, and the terminal is where you execute it. As a developer, this is where you live. Spend some time to pick the right editor, set up the plugins, and learn the hotkeys. Having the right workflow can dramatically increase your productivity.

<strong>Git and Version Control</strong>
Git is the tool used to save code and create different versions, allowing you to collaborate with other developers. The top place to store code and collaborate on open source software is GitHub.

Check my blog to learn about Git, <a href="https://blog.emmanuel.codes/trending/5">Working with Git Like a Senior Software Engineer</a>

<strong>Web Fundamentals</strong>
<ul>
        <li><a href="https://en.wikipedia.org/wiki/HTTP">HTTP</a> / <a href="https://en.wikipedia.org/wiki/HTTPS">HTTPS</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Secure_Shell">SSH</a></li>
        <li><a href="https://www.w3.org/International/questions/qa-what-is-encoding">Character Encodings</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller">Model-View-Controller (MVC)</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Representational_state_transfer">REST</a></li>
      </ul>
<h1><strong>2. Introduction to Programming</strong></h1>
Before you dive into any of the paths, you should have a solid foundation in programming. For new developers, I highly recommend learning JavaScript as your first language. JS can be used for both frontend and backend developers which means you can become a fullstack developer while being able to focus on mastering only one language. The benefits of JavaScript are:
<ul style="list-style: a !important;">
        <li>JavaScript is a relatively easy language to learn
        </li>
        <li>JavaScript is required to build web applications since it is the programming language that runs in the browser
        </li>
        <li>JavaScript can be used on the frontend and the backend, allowing you to write full-stack applications with a single language
        </li>
        <li>There are tons of jobs for JavaScript developers
        </li>
       </ul>
       There are plenty of high-quality free options to get started with coding. <a href="https://www.freecodecamp.org/">freeCodeCamp</a> and <a href="https://www.codecademy.com/">Codecademy</a> are excellent choices and are great to set your foundation.
      
       Once you have the basics down, a great next step is the free <a href="https://javascript30.com">JavaScript30</a> course or the premium <a href="https://beginnerjavascript.com/">BeginnerJavaScript</a> course. Web Bos teaches you the core concepts of JavaScript by building real projects. You should try to do real projects as quickly as possible. Projects are the best way to learn skills for the job and allow you to build a portfolio for when you start interviewing.

       If you are looking for a subscription option with courses that will take you from beginner to pro, a great option is <a href="https://www.pluralsight.com/">Pluralsight</a>. You must sign up for a subscription (free trial offered), but they have excellent content on almost everything.

       <h1><strong>3. Learn Frontend Development</strong></h1>
       Frontend development is how we build user interfaces for the web. You must have a strong foundation in JavaScript as well as understanding how HTML/CSS work.
       
       The popular client-side libraries — React, Angular, and Vue — are all written in JavaScript. Knowing vanilla JavaScript thoroughly is essential to leveling up and having the required skills to build complex applications. Once you have a solid foundation in JavaScript, you should learn HTML and CSS. Even though the UI is coded in JS, it still generates HTML and is styled by CSS.
       
       <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/">The Complete 2023 Web Development Bootcamp</a>
       The most complete course on web development. Start with HTML and CSS, learn JavaScript and how it interacts with the DOM, and eventually build a full stack web application.

       <strong>HTML and CSS</strong>
       HTML and CSS are typically learned together. HTML is the skeleton of the page that gives is structure, and CSS is the language that gives it style.
      
       Some of the best available courses to learn CSS are given below

       <a href="https://www.udemy.com/course/step-by-step-html-and-css-for-absolute-beginners/">HTML and CSS for Absolute Beginners</a>
       <a href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/">Build Responsive Real World Websites with HTML5 and CSS3</a>
       <a href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/">CSS: The Complete Guide (Advanced CSS)</a>

       <strong>UI Libraries (React, Vue, Angular)</strong>
       Modern UI development has gravitated towards a component model with 3 libraries as the primary ones used by professional frontend engineers— React, Vue, and Angular. You are better off knowing one of these libraries very well as opposed to trying to learn all 3. Then on the job, you will be able to pick up something different if the company uses a framework that you did not learn. React is the most popular, but Vue and Angular are both being adopted rapidly.

      <strong>React Courses</strong>
      <ul>
      <li><a href="https://react.dev/learn/tutorial-tic-tac-toe">The Official React Introduction</a></li>
      <li><a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">React — The Complete Guide (incl. Hooks, React Router, Redux)</a></li>
      <li><a href="https://www.udemy.com/course/react-redux/">Modern React with Redux</a></li>
      <li><a href="https://reactforbeginners.com/">React for Beginners</a></li>
      <li><a href="https://advancedreact.com/">Advanced React + GraphQL</a></li>
    </ul> <strong>Vue Courses</strong>
      <ul>
      <li><a href="https://vueschool.io/">Vue School</a></li>
      <li><a href="https://vuejs.org/guide/introduction.html">The Official Vue Introduction</a></li>
      <li><a href="https://www.udemy.com/course/vuejs-2-the-complete-guide/">Vue JS 2 — The Complete Guide (incl. Vue Router & Vuex)</a></li>
      <li><a href="https://www.udemy.com/course/vuejs-2-essentials">The Ultimate Vue JS 2 Developers Course</a></li>
      <li><a href="https://www.udemy.com/course/vue-js-course">Vue JS Essentials with Vuex and Vue Router</a></li>
    </ul><strong>Angular Courses</strong>
    <ul>
    <li><a href="https://www.udemy.com/course/the-complete-guide-to-angular-2/">Angular 8— The Complete Guide</a></li>
    <li><a href="https://www.udemy.com/course/the-complete-angular-master-class/">The Complete Angular Course: Beginner to Advanced</a></li>
  </ul>
  <h1><strong>4. Learn Backend Development</strong></h1>
  The backend is where you communicate with the database, handle business logic, and send the necessary data to the frontend.
  
  Your backend / server can be written in any language. My recommendation is to start with Node/JavaScript since it is relatively easy to learn but also incredibly powerful. In addition, you can more easily transition between frontend and backend since you will be using the same language for each. I will also detail other possible languages to learn backend development — Python, Go, Ruby on Rails.

  Working with a database is core to being a backend engineer, and I will also outline tutorials to learn SQL, NoSQL, and GraphQL. While NoSQL has become more popular, SQL is still by far the most utilized database type and is essential to learn.
  
  <strong>Node.js</strong>
  Node is how we execute JavaScript outside the browser which can be used to build APIs on the backend/server.
  <ul>
    <li><a href="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/">The Complete Node.js Developer Course (3rd Edition)</a></li>
    <li><a href="https://www.udemy.com/course/nodejs-the-complete-guide/">NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)</a></li>
    <li><a href="https://learnnode.com/">Learn Node</a></li>
    </ul><strong>Databases</strong>
    The database is the permanent storage for the data of your application. Typically the backend will make a query against the database during an API call. There are 2 common database types — SQL and NoSQL.
    
    <strong>PostgreSQL / MySQL</strong>
    These are two top SQL implementations and likely what you will see utilized at most companies.
    <ul>
    <li><a href="https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/">The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert</a></li>
    <li><a href="https://www.udemy.com/course/sql-and-postgresql-for-beginners">SQL & PostgreSQL for Beginners
    </a></li>
  </ul><strong>GraphQL</strong>
  GraphQL itself is not a database but a query language on top of databases. Many people believe it is going to revolutionize app development and totally change how we build APIs. It is rapidly gaining adoption and being utilized by tech giants and top startups.
  <ul>
  <li><a href="https://www.udemy.com/course/graphql-bootcamp/">The Modern GraphQL Bootcamp (Advanced Node.js and Apollo)</a></li>
  <li><a href="https://www.udemy.com/course/graphql-with-react-course/">GraphQL with React: The Complete Developers Guide</a></li>
</ul>As a bonus, try <a href="https://hasura.io/">Hasura</a>. It allows you to generate GraphQL using a web UI and automatically builds a Postgres database for you.

<strong>MongoDB</strong>
Mongo is the most popular NoSQL database used with Node. It stores data in documents which are <code>key/value</code> pairs that easily map to JSON and JavaScript objects. 
<ul>
  <li><a href="https://www.udemy.com/course/mongodb-the-complete-developers-guide/">MongoDB — The Complete Developer’s Guide</a></li>
</ul><strong>Python</strong>
Python is easy for beginners but also utilized extensively by tech giants and startups for backends, data science, and scripting.
<ul>
  <li><a href="https://www.udemy.com/course/complete-python-bootcamp/">Complete Python Bootcamp: Go from zero to hero in Python 3</a></li>
  <li><a href="https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/">Python and Django Full Stack Web Developer Bootcamp
  </a></li>   
  </ul><strong>Go (Golang)</strong>
  Go is relatively new but has seen rapid adoption. It is a statically-typed language but is also incredibly developer-friendly. This makes it ideal for building services.
  <ul>
    <li><a href="https://www.udemy.com/course/learn-go-the-complete-bootcamp-course-golang/">Complete Go Bootcamp: Go from zero to hero (Golang)</a></li>
    <li><a href="https://www.udemy.com/course/go-programming-language/">Web Development with Google’s Go Programming Language</a></li>   
    </ul><strong>Ruby on Rails</strong>
    Ruby on Rails was the go-to startup language for years. Its ease of use and convention-driven language made it easy to rapidly build products.
    <ul>
      <li><a href="https://www.udemy.com/course/the-complete-ruby-on-rails-developer-course/">The Complete Ruby on Rails Developer Course</a></li>  
      </ul>
      <h1><strong>5. Learn DevOps Engineering</strong></h1>
      DevOps manages the infrastructure of a company. They set up the processes to deploy your web apps and manage traffic to the site. DevOps engineers focus on allowing other teams to get code into production as fast as possible and make sure the servers are always up and running while and sending content to the end-user as quickly as possible.
      
      The field of DevOps is very broad, and the choices they make impact every engineering team. Some essential topics to learn as a DevOps engineer include:
      
      <strong>Linux</strong>
      Linux is used on 67%+ servers and is highly likely what you would use as a DevOps engineer. It is essential to thoroughly understand it.
      
      <strong>Security</strong>
      Make sure your entire cloud is secured and encrypted. Also set up the APIs such that all content is served through HTTPS and not susceptible to common attacks.
      
      <strong>Command Line / Terminals</strong>
      We introduced the command line in the first section, but it even more essential for a DevOps engineer. You must thoroughly understand how it works and the Linux commands and be prepared to SSH into remote servers. You will also be writing scripts and automating programs for the entire company.
      
      <strong>Automated Testing</strong>
      DevOps sets up a system of automated testing so that all code that enters production has been thoroughly vetted and reduces the possibility of introducing bugs or regressions.
     
      <strong>Continuous Integration and Continuous Delivery (CI/CD)</strong>
      Set up a pipeline for deployment so that code is automatically merged into production while reducing manual touchpoints for individual developers. Automated testing using plays a large role in CI/CD.
      
      <strong>Containers</strong>
      Containers are a core part of infrastructure, with most startups and tech giants utilizing Docker and/or Kubernetes in some form. A container ensures that your code is always executed in a clean and reproducible environment.
      
      <strong>Cloud Providers</strong>
      Understand how to manage servers in the cloud using one of the popular providers such as AWS, GCP, or Azure.
      
      <strong>Log Management</strong>
      Having proper logging is essential. It allows you to diagnose bugs and find the root cause for any issues in your application.
      
      <h1><strong>6. JavaScript and Coding In-depth</strong></h1>
      I recommend working on real projects as quickly as possible. However, at some point, you will want to do a deep dive into JavaScript and learn how it all works underneath the hood. In addition, it is important to have an understanding of data structures, algorithms, and other general computer science knowledge.

      <strong>You Don’t Know JavaScript (YDKJS)</strong>
      This is simply the best book on JavaScript. If you work through this entirely, you will know the entire core language of JS. Read it <a href="https://github.com/getify/You-Dont-Know-JS">free on GitHub</a>
      
      <strong>TypeScript</strong>
      This is not a requirement for beginners (unless you are using Angular), but TypeScript adoption is growing rapidly and has consumed the JS world. Many think it’s the future of JavaScript.
      
      <strong>Data Structures in JavaScript</strong>
      Build the most common data structures from the ground up in JavaScript. This video series is a great extension to build the knowledge you have already gained and is an excellent resource for interviews as well.
      
      <strong>Eloquent JavaScript</strong>
      Another favorite book of JavaScript engineers. It covers a broader range of topics than YDKJS, including the browser and Node. <a href="https://eloquentjavascript.net/">Read it for free online</a>
      
      <strong>Introduction to Algorithms</strong>
      While not the most beginner-friendly book, it is thorough. Take this step once you really feel like it’s time to understand algorithms thoroughly. <a href="https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/">Click here to purchase the book</a>
      
      <h1><strong>7. Software Engineering Books</strong></h1>
      This selection is 5 books that will either make you a better coder in general or an essential book you will need at some point in your career, such as during interviews.
      <ul>
        <li><strong>Clean Code</strong> by Robert C Martin
        </li>
        <li><strong>The Pragmatic Programmer</strong> by Andrew Hunt & David Thomas
        </li>
        <li><strong>The Effective Engineer</strong> by Edmund Lau
        </li>
        <li><strong>Cracking the Coding Interview</strong> by Gayle Laakmann McDowell
        </li>
        <li><strong>The Art of Computer Programming</strong> by Donald Knuth</li>
       </ul>If you are learning to web development, there is also a high likelihood you’re interested in startups. These are some of the top books about startups and the philosophies of those that are successful.
       <ul>
       <li><strong>The Lean Startup</strong> by Eric Ries
       </li>
       <li><strong>Zero to One</strong> by Peter Thiel
       </li>
       <li><strong>Hooked</strong> by Nir Eyal
       </li>
       <li><strong>Traction</strong> by Gabriel Weinberg and Justin Mares
       </li>
       <li><strong>The Hard Thing About Hard Things</strong> by Ben Horowitz</li>
      </ul>
      <h1><strong>8. Land your dream job</strong></h1>
      By following these tutorials, you will be on your way to becoming a professional web developer. Make sure to start building real projects as quickly as possible and begin applying to jobs. Projects and deployed web apps are the best way to show a company that you will be able to contribute once you are hired.

Some Tips:
<ul>
<li>Only focus on a few skills: Ex. JavaScript, React, Node. Don’t try to learn everything — React, Vue, Angular, jQuery, Backbone, etc. Get as good as you can learning the minimal required languages/libraries. Go deep, not wide.
</li>
<li>Apply to as many jobs as you can as long as they fit your skillset. Don’t give up! You will eventually find your role if you keep working. It’s a long and hard road, but well worth the effort if you are passionate about the field.
</li>
<li>Practice for the interview. Use “Cracking the Coding Interview” and websites to become comfortable with answering interview questions.</li>
<li>Read the “You Don’t Know JavaScript” series. This will ensure you know the language inside and out.</li>
<li>Keep building projects — projects are the best way to learn and show that you understand how to build apps for the real world.</li>
</ul>Finding the first job is always a numbers game, so the more you apply, the better your odds are of getting an offer. It can take months though, so be ready for the long road. However, you will get one eventually and every job going forward will be much easier to get after landing that first role.`,
      published: 'Apr 23,  2023',
      author: {
        name: 'Emmanuel Martin',
        img: '/images/author/author1.jpg',
        designation: 'Author',
      },
    },
    {
      id: 5,
      title: 'Working with Git Like a Senior Software Engineer',
      subtitle:
        `Git is a version control system that is widely used in the software development industry. It allows developers to track changes to their codebase and collaborate with others on projects.`,
      category: 'Git, Education',
      img: '/images/img5.png',
      description: `
      <h1><strong>Table of Contents</strong></h1><ul style="list-style: a !important;">
        <li>Use Branches</li>
        <li>Use version control best practices</li>
        <li>Understand Git commands</li>
        <li>Use a Git GUI</li>
        <li>Collaborate with others</li>
      </ul>
      <h1><strong>Use Branches</strong></h1>
      One of the key features of Git is the ability to work with branches. A branch is a separate line of development that allows you to work on new features or fixes without affecting the main codebase. This is useful for experimentation and for keeping the main codebase stable while working on new features.

As a software engineer, you should be familiar with branching strategies and know how to use branches effectively in your workflow. For example, you might use a feature branch workflow, where you create a new branch for each new feature you are working on. Once the feature is complete, you can merge the feature branch back into the main branch.

Here's an example of how to create a new branch in Git:
<pre style="padding: 10px !important;">
  git checkout -b new-feature
</pre>
This command creates a new branch called <code>new-feature</code> and switches to it. You can then make changes to the codebase and commit them to the new branch.

<h1><strong>Use version control best practices</strong></h1>
It's important to follow best practices when using version control, such as committing frequently, writing descriptive commit messages, and using pull requests to review code changes.

Committing frequently allows you to save your progress as you work on a feature or bug fix. This makes it easier to revert back to a previous version if something goes wrong. It's also a good idea to write descriptive commit messages that clearly explain the changes made in each commit. This makes it easier for others to understand the history of the codebase and why certain changes were made.

Pull requests are a way to review code changes before they are merged into the main codebase. They allow other team members to review your code and give feedback, which can help catch bugs or identify potential issues before they are merged. As a senior software engineer, it's important to review pull requests from others and give constructive feedback.

<h1><strong>Understand Git commands</strong></h1>
Knowing how to use Git commands such as <code>commit</code>, <code>push</code>, <code>pull</code>, <code>merge</code>, and <code>rebase</code> is essential for working with Git effectively.

The <code>commit</code> command is used to save changes to the local repository. For example, to commit changes with a message, you can use the following command:
<pre style="padding: 10px !important;">git commit -m "Commit message"</pre>
The <code>push</code> command is used to send your commits to a remote repository, such as a GitHub repository. For example, to push your commits to the <code>main</code> branch of a remote repository called <code>origin</code>, you can use the following command:
<pre style="padding: 10px !important;">git push origin main</pre>
The <code>pull</code> command is used to fetch and merge changes from a remote repository. For example, to pull the latest changes from the <code>main</code> branch of a remote repository called <code>origin</code>, you can use the following command:
<pre style="padding: 10px !important;">git pull origin main</pre>
The <code>merge</code> command is used to merge one branch into another. For example, to merge the <code>new-feature</code> branch into the <code>main</code> branch, you can use the following command:
<pre style="padding: 10px !important;">git merge new-feature</pre>
The <code>rebase</code> command is used to apply the changes from one branch onto another. This can be useful for cleaning up the commit history and avoiding merge commits. For example, to rebase the <code>new-feature</code> branch onto the <code>main</code> branch, you can use the following command:
<pre style="padding: 10px !important;">git rebase main</pre>

<h1><strong>Use a Git GUI</strong></h1>
While it's important to know how to use Git from the command line, a graphical user interface (GUI) can also be useful for visualizing and interacting with your Git repository. Git GUI clients such as GitKraken or SourceTree provide a visual representation of your repository and allow you to perform Git actions through a graphical interface.

Using a Git GUI can be helpful for beginners or for those who prefer a more visual approach to version control. As a software engineer, it's important to be proficient in using both the command line and a Git GUI.

<h1><strong>Collaborate with others</strong></h1>
As a software engineer, you'll likely be working with a team of developers on a project. It's important to know how to collaborate with others using Git, such as how to resolve merge conflicts and how to work with remote repositories.

A merge conflict occurs when two branches have changes that cannot be automatically merged. For example, if two people edit the same line of code in different branches, Git will not be able to automatically merge the changes. In this case, you'll need to manually resolve the conflict by deciding which changes to keep or by manually merging the changes.

To work with a remote repository, you'll need to add it to your local repository using the <code>git remote</code> command. For example, to add a remote repository called <code>origin</code>, you can use the following command:
<pre style="padding: 10px !important;">git remote add origin https://github.com/user/repo.git</pre>
You can then use the <code>git push</code> and <code>git pull</code> commands to push and pull changes to and from the remote repository.

By following these tips and continually learning and improving your Git skills, you can become proficient in using Git as a software engineer. It's also important to stay up to date with the latest Git features and best practices to ensure that you are using Git effectively in your workflow.`,
      published: 'Apr 24,  2023',
      author: {
        name: 'Emmanuel Martin',
        img: '/images/author/author1.jpg',
        designation: 'Author',
      },
    },
  ],
  Posts: [
    {
      id: 1,
      title: 'Process Based Education (PBE)',
      subtitle:
        'The future of educational system after Outcome Based Education (OBE)',
      category: 'Education',
      img: '/images/articles/posts/img1.jpg',
      description: `
            In the current education system, students lacks ability to explore outside the syllabus and they are stuck in a mediocre of evaluation system. Students are evaluated on based what they learned only during the class hours not on what they can do with the learning. They are not trained to explore further more on the topics they learn in the classroom.<br>
            We all have been introduced to the Outcome Based Education (OBE), which helps the students to know what they are learning, why this syllabus is important, what all skills are gained while learning the subject. This system has brought up a lot of changes in the education system. Still it is not quite fitting with the students. The current pattern to evaluate students is based conducting more and more examinations based only on what they studied theoretically. This will lack practical knowledge of students on a subject.<br>
            <img src="../images/blog_data/process_based_education/1xkd7OmNhm-tN_wAsuwU6fw.png">
            Implementing a new pattern to evaluate students on their education, not just by evaluating what they know theoretically rather than understanding what they know practically.<br>
            <h1>How Students benefit from Process Based Education?</h1>
            There are six different boosters a student gets while practising process based education. Learning by a process with the known outcome will help them to implement it in their daily lives.
            
            <strong>1. Problem Solving Mindset</strong>
            Students will be able to solve problems or tasks they encounter on their daily routine. They can easily identify a problem and obtain a solution for the same. This mindset will be developed among students. It will also help them to find an estimate for the problem.

            <strong>2. Collaboration & Contribution among peers</strong>
            Students gets an opportunity to collaborate among peer students. They can also contribute towards projects other students are working on. This will help them to learn by teaching others.

            <strong>3. Observation skills</strong>
            They key goal to find a solution to something is by observing it. Observation skill helps student to find numerous solution for a problem just by observing it. Learn by observing in their day to day activities.

            <strong>4. Critical Thinking</strong>
            The critical thinking ability will help students to analyse a problem and predict about its future. This will give them confidence and will be ready to face any problems in their life.

            <strong>5. Exploration outside the syllabus</strong>
            In the current education system, students don’t have a mindset to explore topics from outside the syllabus. The Exploration mentality is about creating a mindset to go through topics outside the syllabus. Such as exploring a framework of a programming language.

            <strong>6. Solution driven approach</strong>
            The solution driven approach will help students to analyse a task and find the possible outcome of it. Students will be able to focus and understand deep root of a subject, they can bringup solutions and suggestions on it.

            <img src="../images/blog_data/process_based_education/1EdGGBxB64EvBwurBZsIAzQ.png">
            
            <strong>Summary</strong>
            This is my point of view on the current education system of outcome based education, An act of education reform is required for the modern education as students are lacking skills and ability to perform in extra curricular activities. They are bounded in the syllabus and inside the box. Process Based Education will help them to explore more other than their current curriculam and outside the world.
            
            <strong>References</strong>
            <a href="https://cga.ct.gov/PS94/rpt%5Colr%5Chtm/94-R-0290.htm#:~:text=What%20is%20the%20definition%20of,they%20leave%20the%20school%20system">https://cga.ct.gov/PS94/rpt%5Colr%5Chtm/94-R-0290.htm#:~:text=What%20is%20the%20definition%20of,they%20leave%20the%20school%20system</a>

            <strong>Credits</strong>
            Image: <a href="https://unsplash.com/photos/u93RuS6IJGk">https://unsplash.com/photos/u93RuS6IJGk</a>
            `,
      published: 'Dec 14,  2022',
      author: {
        name: 'Emmanuel Martin',
        img: '/images/author/author1.jpg',
        designation: 'Author',
      },
    },
    {
      id: 2,
      title: 'Top Programming Languages to learn in 2023',
      subtitle:
        'As we approach 2023, the world of programming continues to evolve at an unprecedented pace. Here are the top programming languages that are expected to dominate the industry in 2023',
      category: 'Tech, Latest',
      img: '/images/articles/posts/img2.png',
      description: `
      <h1>1. Python</h1>
      <p>Python has been steadily growing in popularity over the past few years, and it's expected to continue its upward trajectory in 2023. Its simple syntax, powerful libraries, and broad application domains make it a versatile language that can be used for everything from data science to web development. Python's popularity is also attributable to its widespread use in artificial intelligence and machine learning, where it's used to build complex models and algorithms.</p>
      <h1>2. JavaScript</h1>
      <p>JavaScript is a ubiquitous programming language that has been around for over two decades. It's used to build interactive web applications, and its versatility makes it a must-learn language for any web developer. JavaScript is continually evolving, and its libraries and frameworks such as React and Angular have made it an essential language for building modern web applications.
      </p>
      <h1>3. Java</h1>
      <p>Java has been a popular programming language for over two decades, and its popularity continues to grow. It's an object-oriented language that's used to build enterprise-level applications, mobile applications, and web applications. Java's robustness, security, and platform independence make it a popular choice for large-scale applications, and its vast community of developers ensures that it will continue to be a top programming language in 2023.
      </p>
      <h1>4. Kotlin</h1>
      <p>Kotlin is a relatively new programming language that has been gaining popularity over the past few years. It's a highly expressive language that's easy to learn and use, making it a popular choice for Android app development. Kotlin has many features that make it more concise than Java, and its interoperability with Java makes it an excellent choice for developers who want to migrate to a more modern language.
      </p>
      <h1>5. Swift</h1>
      <p>Swift is a programming language used for building iOS and macOS applications. Its powerful features, such as optionals, closures, and generics, make it a popular choice for developers who want to build high-performance applications. Swift's syntax is similar to many other programming languages, making it easy to learn for developers who are familiar with other languages.
      </p>
      <h1>6. Go</h1>
      <p>Go is a programming language that was created by Google in 2009. It's designed to be fast, efficient, and easy to use. Go's simplicity and ease of use make it an attractive option for developers who want to build high-performance applications quickly. Go is also well-suited for cloud computing, where its concurrency features and low memory footprint make it an excellent choice for building scalable applications.
      </p>
      <h1>7. Rust</h1>
      <p>Rust is a systems programming language that's gaining popularity due to its focus on safety, performance, and concurrency. It's designed to be memory-safe, and its features such as ownership and borrowing make it a popular choice for building high-performance applications that require low-level control over system resources. Rust's growing popularity makes it a programming language to watch in 2023.
      </p>
      <h1>
      Conclusion</h1>
      <p>In conclusion, these are the top programming languages that are expected to dominate the tech industry in 2023. While there are many other programming languages out there, these languages stand out due to their wide-ranging applications, robustness, and growing communities. Whether you're a beginner or an experienced programmer, learning these languages will help you stay ahead in the ever-evolving world of technology.
      </p>`,
      published: 'Apr 21,  2023',
      author: {
        name: 'Emmanuel Martin',
        img: '/images/author/author1.jpg',
        designation: 'Author',
      },
    },
    {
      id: 3,
      title: 'Improve your Design Skills with these Websites',
      subtitle:
        `Design is an integral part of the modern world. It's everywhere - from the products we use every day to the spaces we inhabit. And as the world becomes increasingly digital, design has become more important than ever. If you're looking to get inspired or improve your design skills, there are many websites out there that can help. Here are some of the best design websites to check out.
        `,
      category: 'Design, Tech',
      img: '/images/articles/posts/img3.png',
      description: `
      <strong>Behance</strong>
      Behance is a platform for creative professionals to showcase their work, discover new talent, and connect with other creatives. It's owned by Adobe and is an excellent resource for design inspiration. You can browse thousands of projects in various categories, including graphic design, web design, photography, and more.
      
      <strong>Dribbble</strong>
      Dribbble is a community of designers who share their work, get feedback, and find inspiration. It's a great place to discover new design trends, learn about best practices, and connect with other designers. Dribbble is also an excellent resource for finding freelance work or hiring designers for your projects.
      
      <strong>Awwwards</strong>
      Awwwards is a website that recognizes and awards the best web design around the world. They showcase sites that are not only aesthetically pleasing but also have exceptional functionality and user experience. If you're looking for the latest trends in web design, Awwwards is a great place to start.
      
      <strong>Smashing Magazine</strong>
      Smashing Magazine is a website that provides articles, tutorials, and resources for designers and developers. It covers a wide range of topics, including web design, graphic design, UX design, and front-end development. If you're looking to improve your design skills, Smashing Magazine is an excellent resource.
      
      <strong>Designspiration</strong>
      Designspiration is a website that curates design inspiration from around the web. It features a massive collection of designs in various categories, including typography, branding, and photography. If you're feeling stuck or uninspired, Designspiration is a great place to find fresh ideas.
      
      <strong>CreativeBloq</strong>
      CreativeBloq is a website that provides articles, tutorials, and resources for designers and developers. It covers a wide range of topics, including web design, graphic design, UX design, and front-end development. If you're looking to improve your design skills, CreativeBloq is an excellent resource.
      
      <strong>Canva Design School</strong>
      Canva Design School is a website that provides free design resources, tutorials, and courses. It's an excellent resource for beginners who are just getting started with design. Canva Design School covers a wide range of topics, including design theory, typography, and branding.
      
      <h1>Conclusion</h1>
      In conclusion, these are some of the best design websites to check out if you're looking for inspiration, resources, or want to improve your design skills. Whether you're a beginner or an experienced designer, these websites have something for everyone. So, go ahead and explore these sites to take your design game to the next level! `,
      published: 'Apr 21,  2023',
      author: {
        name: 'Emmanuel Martin',
        img: '/images/author/author1.jpg',
        designation: 'Author',
      },
    },
    {
      id: 4,
      title: `Things to do when you're bored at home`,
      subtitle: `When you're bored at home, there are many fun activities you can try. Learn a new skill, start a blog, or plant saplings. Connect with others through virtual events, or relax with meditation or yoga. There are endless possibilities to make the most of your downtime at home.`,
      category: 'Personal, Health',
      img: '/images/articles/posts/img4.png',
      description: `
      You can start by exploring new hobbies, such as painting, drawing, or writing. You can also try cooking or baking something new, watching a movie or reading a book, or even organizing your living space to create a more comfortable and enjoyable environment. Additionally, you can challenge yourself with puzzles or board games, or try out a new exercise routine to get your blood flowing. Whatever you choose to do, the key is to stay engaged and actively seek out new experiences to keep boredom at bay.

      <strong>1. Take an online course</strong>

      Taking an online course is a great way to keep yourself busy and learn something new while at home. There are countless courses available on a wide range of topics, from coding and graphic design to creative writing and cooking. Online courses offer the flexibility to learn at your own pace and on your own schedule, making it easy to fit learning into your daily routine. Additionally, many online courses are free or low-cost, making them accessible to everyone. Whether you're looking to advance your career, pick up a new hobby, or simply expand your knowledge, taking an online course is a productive and fulfilling way to spend your downtime.
      
      <strong>2. Start a Blog</strong>

      Starting a blog is a fun and creative way to spend your time at home. Whether you're passionate about a particular topic or just enjoy writing, blogging allows you to share your thoughts and ideas with the world. With the abundance of blogging platforms available online, it's never been easier to start a blog. You can choose a free platform such as WordPress or Blogger, or invest in your own domain name and hosting. Once your blog is up and running, you can create and publish content on a regular basis, interact with your readers, and build a community around your writing. Blogging is a great way to improve your writing skills, share your voice, and connect with others who share your interests.
      
      <strong>3. Learn Calligraphy</strong>

      Learning calligraphy is a rewarding and artistic hobby that can be done from the comfort of your home. Calligraphy is the art of beautiful handwriting and can be used to create stunning works of art, such as wedding invitations, greeting cards, or personalized gifts. There are many online resources available for learning calligraphy, including video tutorials, online courses, and downloadable practice sheets. All you need to get started is a set of calligraphy pens or a calligraphy brush and paper. With practice and dedication, you can master the techniques of calligraphy and create your own beautiful pieces of art. Learning calligraphy is a fun and creative way to express yourself and add a personal touch to your writing.
      
      <strong>4. Read a Book</strong>

      Reading a book is a wonderful way to pass the time and expand your knowledge from the comfort of your own home. Reading offers a myriad of benefits, from improving cognitive function and reducing stress to enhancing empathy and increasing vocabulary. With so many genres to choose from, there is a book for everyone, whether you prefer fiction, non-fiction, biographies, or self-help. You can read for pleasure, learn a new skill, or simply escape into a different world. You can purchase physical books, borrow from a library, or read ebooks on your electronic device. No matter how you choose to read, immersing yourself in a good book is a fantastic way to relax, learn, and stimulate your mind.
      
      <strong>5. Plant Saplings</strong>

      Planting saplings is a rewarding and eco-friendly activity that can be done at home. Planting trees helps to reduce carbon dioxide in the atmosphere and provides a habitat for wildlife. All you need to get started is a sapling, soil, and a pot or a patch of land. You can choose a variety of saplings based on your region and the season. Planting saplings not only benefits the environment but can also be a great stress-relieving activity. Taking care of the saplings requires patience, diligence, and nurturing, and watching them grow and thrive can be a fulfilling experience. Planting saplings is a small step you can take to make a positive impact on the environment and create a greener world.
      
      <strong>6. Play a Board Game</strong>

      Playing a board game is a fun and social activity that can be enjoyed by people of all ages. Board games offer a chance to disconnect from technology and spend quality time with friends or family. There are countless board games available, from classic games like Monopoly and Scrabble to newer games like Settlers of Catan and Ticket to Ride. Board games can be played with just two players or with a large group, making them a versatile option for entertainment. Playing a board game can improve critical thinking skills, foster communication, and build teamwork. Whether you're looking for a quiet night in or a fun activity to do with others, playing a board game is a classic and enjoyable way to pass the time.
      
      <strong>7. Learn Sign Language</strong>

      Learning sign language is a useful and empowering skill that can be learned at home. Sign language is a visual language that uses hand gestures, facial expressions, and body language to communicate with individuals who are deaf or hard of hearing. There are many online resources available for learning sign language, including video tutorials, online courses, and apps. Learning sign language allows you to communicate with a wider range of people and can also be useful in a professional setting. Sign language is a fun and interactive way to learn a new language, and can be a valuable addition to your skillset. By learning sign language, you are not only improving your own communication abilities, but also helping to bridge the gap between hearing and non-hearing communities.
      
      <strong>8. Try a DIY Project</strong>

      Trying a DIY project is a great way to unleash your creativity and learn new skills while staying at home. DIY projects can range from simple crafts to complex home renovations, depending on your interests and skill level. You can find inspiration for DIY projects from online tutorials, books, or even repurposing items around your home. DIY projects can be a cost-effective way to personalize your living space and add a personal touch to your decor. Additionally, completing a DIY project can give you a sense of accomplishment and boost your self-confidence. Whether you're creating something functional or decorative, trying a DIY project is a fun and fulfilling way to spend your free time.
      
      <strong>9. Plan a small trip</strong>

      Planning a small trip is an exciting and refreshing way to spend your time at home. Whether it's a weekend getaway or a day trip to a nearby town, taking a break from your routine and exploring a new place can do wonders for your mental health and wellbeing. You can research destinations, plan an itinerary, and book accommodations and transportation all from the comfort of your home. There are many resources available online for finding the perfect destination and activities, such as travel blogs and websites. Planning a trip can also give you something to look forward to and help break up the monotony of your daily routine. Whether you prefer a relaxing retreat or an adventure-packed excursion, planning a small trip is a great way to rejuvenate and explore the world around you.

      <strong>10. Create a new playlist</strong>

      Creating a new playlist is a fun and easy way to refresh your music library and discover new songs and artists. Whether you use a streaming service like Spotify or create a playlist on your device, curating your own playlist allows you to personalize your music experience and tailor it to your mood and preferences. You can choose songs from different genres, artists, and eras to create a unique blend of music. Creating a playlist can also be a fun and creative outlet for expressing yourself and sharing your taste in music with others. You can share your playlist with friends, family, or on social media, and discover new music through their recommendations as well. With so many songs to choose from, creating a new playlist is a great way to discover new music, reminisce over old favorites, and add some rhythm to your day.
      
      <strong>11. Try your hand at origami</strong>

      Trying your hand at origami is a fun and engaging activity that can be done at home. Origami is the Japanese art of folding paper into intricate shapes and designs, and is a great way to exercise your creativity and patience. You can find a variety of online tutorials and guides to help you get started with origami, and all you need is paper and a flat surface to work on. Origami can be a relaxing and meditative activity, as you focus on the precision of each fold and creating a beautiful piece of art from a single sheet of paper. It's also a great way to improve fine motor skills, concentration, and problem-solving abilities. Whether you're a beginner or an experienced origami artist, trying your hand at origami is a rewarding and enjoyable activity that can be done anytime and anywhere.
      
      <strong>12. Listen to a podcast</strong>

      Listening to a podcast is a great way to learn something new, be entertained, or catch up on current events. With so many genres and topics available, you can find a podcast that suits your interests and preferences.
      
      <strong>13. Take Personality Quizzes</strong>

      Taking personality quizzes can be a fun and insightful way to learn more about yourself and your interests. You can find a variety of online quizzes that cover topics such as personality traits, career preferences, and hobbies.
      
      <strong>14. Draw a caricature of yourself or your friend</strong>

      Drawing a caricature of yourself or your friend is a creative and amusing activity that can be done with just a pencil and paper. Caricatures are exaggerated and comical portraits that capture the essence of a person's appearance and personality.
      
      <strong>15. Print out your photos and make a collage</strong>

      Printing out your photos and making a collage is a great way to showcase your memories and create a personalized piece of art. You can arrange your photos in a creative way and add other elements such as stickers or text to make it even more unique.
      
      <strong>16. Have a virtual karaoke party with your friends</strong>

      Having a virtual karaoke party with your friends is a fun and engaging way to connect with others while staying at home. You can use video conferencing software to sing your favorite songs and share your musical talents with each other.
      

      <h1>Conclusion</h1>
      In conclusion, there are countless activities you can do when you find yourself bored at home. From learning a new skill to trying a DIY project, the possibilities are endless. Taking an online course, starting a blog, or even just reading a book are all great ways to engage your mind and expand your horizons. If you're looking for something more hands-on, you can try your hand at origami, draw a caricature, or plant saplings. Whatever your interests may be, there is sure to be a fun and engaging activity that you can do from the comfort of your own home. So the next time you find yourself feeling bored, don't despair - try out some of these ideas and discover a new hobby or passion that you can enjoy for years to come.  `,
      published: 'Apr 30,  2023',
      author: {
        name: 'Emmanuel Martin',
        img: '/images/author/author1.jpg',
        designation: 'Author',
      },
    },
  ],
  Popular: [
    {
      id: 3,
      title: 'Why You Need To Know About AutoGPTs',
      subtitle:
        'The Next Wave Of Generative AI',
      category: 'Tech',
      img: '/images/articles/img3.png',
      description: `
      Do you ever have that feeling after reading or watching something that everything is about to change?

      I had that feeling last year when I first read OpenAI’s announcement post on DALL-E 2. That’s actually the moment for me when I suddenly shifted my technology gaze toward this thing called Generative AI.
      
      Since then, we’ve seen an explosion of innovation in generative content creation, with transformers that output text, images, code, and video. And no doubt, this content creation space will continue to progress rapidly.
      
      But I had another one of those feelings several days ago.
      
      And it wasn’t from a company blog, an event, or a release announcement. It was in my Twitter feed.
      
      What I was witnessing was post after post of developers experimenting with something that is very new and different.
      
      It was about the creation of autonomous AI agents, currently referred to as AutoGPTs.
      
      What makes AutoGPTs amazing is once you give them a mission, they go off and autonomously perform that objective for you. They figure out the tasks and steps required.

      This is one more step closer to AGI (Artificial General Intelligence).
      
      And while there are talks about an AI pause and government bans on ChatGPT, the next wave of generative AI is surfacing and it’s not from private or company research labs, but from Github repos and Twitter feeds.      
            `,
      published: 'Apr 23,  2023',
      author: {
        name: 'Emmanuel Martin',
        img: '/images/author/author1.jpg',
        designation: 'Author',
      },
    },
    {
      id: 5,
      title: '10 killer Python automation scripts',
      subtitle:
        'Repeating tasks are always time-consuming and boring. Imagine cutting 100 photos one by one or doing tasks such as Fetching APIs, correcting spelling and grammar, etc., all of which take a lot of time. Why not automate them? In today’s article, I will share with you 10 Python automation scripts.',
      category: 'Tech, Python',
      img: '/images/articles/img5.png',
      description: `
      <strong>1. Image Optimizer</strong>

      This great automation script can help you process images better and you can edit them just like in Photoshop.
      
      The script uses the popular Pillow module.
      <pre>
      # Image Optimizing
      # pip install Pillow
      import PIL
      # Croping 
      im = PIL.Image.open("Image1.jpg")
      im = im.crop((34, 23, 100, 100))
      # Resizing
      im = PIL.Image.open("Image1.jpg")
      im = im.resize((50, 50))
      # Flipping
      im = PIL.Image.open("Image1.jpg")
      im = im.transpose(PIL.Image.FLIP_LEFT_RIGHT)
      # Rotating
      im = PIL.Image.open("Image1.jpg")
      im = im.rotate(360)
      # Compressing
      im = PIL.Image.open("Image1.jpg")
      im.save("Image1.jpg", optimize=True, quality=90)
      # Bluring
      im = PIL.Image.open("Image1.jpg")
      im = im.filter(PIL.ImageFilter.BLUR)
      # Sharpening
      im = PIL.Image.open("Image1.jpg")
      im = im.filter(PIL.ImageFilter.SHARPEN)
      # Set Brightness
      im = PIL.Image.open("Image1.jpg")
      im = PIL.ImageEnhance.Brightness(im)
      im = im.enhance(1.5)
      # Set Contrast
      im = PIL.Image.open("Image1.jpg")
      im = PIL.ImageEnhance.Contrast(im)
      im = im.enhance(1.5)
      # Adding Filters
      im = PIL.Image.open("Image1.jpg")
      im = PIL.ImageOps.grayscale(im)
      im = PIL.ImageOps.invert(im)
      im = PIL.ImageOps.posterize(im, 4)
      # Saving
      im.save("Image1.jpg")
      </pre>

      <strong>2. Video Optimizer</strong>
      
      With the following automation script, you can not only use Python to optimize videos, but also use it to optimize images. The script uses the Moviepy module, which allows you to trim, add audio, set video speed, add VFX, etc.
      <pre>
      # Video Optimizer
      # pip install moviepy
      import moviepy.editor as pyedit
      # Load the Video
      video = pyedit.VideoFileClip("vid.mp4")
      # Trimming
      vid1 = video.subclip(0, 10)
      vid2 = video.subclip(20, 40)
      final_vid = pyedit.concatenate_videoclips([vid1, vid2])
      # Speed up the video
      final_vid = final_vid.speedx(2)
      # Adding Audio to the video
      aud = pyedit.AudioFileClip("bg.mp3")
      final_vid = final_vid.set_audio(aud)
      # Reverse the Video
      final_vid = final_vid.fx(pyedit.vfx.time_mirror)
      # Merge two videos
      vid1 = pyedit.VideoFileClip("vid1.mp4")
      vid2 = pyedit.VideoFileClip("vid2.mp4")
      final_vid = pyedit.concatenate_videoclips([vid1, vid2])
      # Add VFX to Video
      vid1 = final_vid.fx(pyedit.vfx.mirror_x)
      vid2 = final_vid.fx(pyedit.vfx.invert_colors)
      final_vid = pyedit.concatenate_videoclips([vid1, vid2])
      # Add Images to Video
      img1 = pyedit.ImageClip("img1.jpg")
      img2 = pyedit.ImageClip("img2.jpg")
      final_vid = pyedit.concatenate_videoclips([img1, img2])
      # Save the video
      final_vid.write_videofile("final.mp4")
      </pre>

      <strong>3. Convert PDF to image</strong>

      This small automated script can easily retrieve entire PDF pages and convert them into images. The script uses the popular PyMuPDF module, which is known for its PDF text extraction.
      <pre>
      # PDF to Images
      # pip install PyMuPDF
      import fitz
      def pdf_to_images(pdf_file):
          doc = fitz.open(pdf_file)
          for p in doc:
              pix = p.get_pixmap()
              output = f"page{p.number}.png"
              pix.writePNG(output)
      pdf_to_images("test.pdf")
      </pre>

      <strong>4. Get API Data</strong>
      
      If you need to get API data from a database or need to send an API request to a server, this automation script is a convenient tool for you. Using the Urllib3 module, you can get and post API requests.
      
      <pre>
      # pip install urllib3
      import urllib3
      # Fetch API data
      url = "https://api.github.com/users/psf/repos"
      http = urllib3.PoolManager()
      response = http.request('GET', url)
      print(response.status)
      print(response.data)
      # Post API data
      url = "https://httpbin.org/post"
      http = urllib3.PoolManager()
      response = http.request('POST', url, fields={'hello': 'world'})
      print(response.status)
      </pre>

     <strong>5. Battery indicator light</strong>
      
      This convenient script allows you to set the battery percentage at which you want to receive notifications. The script uses Pyler for notifications and Psutil to get the current battery percentage.
      <pre>
      # Battery Notifier
      # pip instal plyer
      from plyer import notification
      import psutil
      from time import sleep
      while True:
          battery = psutil.sensors_battery()
          life = battery.percent
          if life < 50:
              notification.notify(
                  title = "Battery Low",
                  message = "Please connect to power source",
                  timeout = 10
              )
          sleep(60)
      </pre>

      <strong>6. Grammar fixer</strong>
      
      Tired of proofreading your long articles or texts? Then, you can try this automated script which will scan your text and correct grammar errors. This great script uses the Happtransformer module, which is a machine learning module trained to fix grammar errors in text.
      <pre>
      # Grammer Fixer
      # pip install happytransformer
      from happytransformer import HappyTextToText as HappyTTT
      from happytransformer import TTSettings
      def Grammer_Fixer(Text):
          Grammer = HappyTTT("T5","prithivida/grammar_error_correcter_v1")
          config = TTSettings(do_sample=True, top_k=10, max_length=100)
          corrected = Grammer.generate_text(Text, args=config)
          print("Corrected Text: ", corrected.text)
      Text = "This is smple tet we how know this"
      Grammer_Fixer(Text)
      </pre>

      <strong>7. Spelling correction</strong>
      
      This great script will help you correct spelling errors in your text words. You can find the script below which will tell you how to fix single or multiple words in a sentence.
      <pre>
      # Spell Fixer
      # pip install textblob
      from textblob import *
      # Fixing Paragraph Spells
      def fix_paragraph_words(paragraph):
          sentence = TextBlob(paragraph)
          correction = sentence.correct()
          print(correction)
      # Fixing Words Spells
      def fix_word_spell(word):
          word = Word(word)
          correction = word.correct()
          print(correction)
      fix_paragraph_words("This is sammple tet!!")
      fix_word_spell("maangoo")
      </pre>

      <strong>8. Internet downloader</strong>
     
      You may use download software to download photos or videos from the internet, but now you can create your own downloader using the Python IDM module.
      <pre>
      # Python Downloader
      # pip install internetdownloadmanager
      import internetdownloadmanager as idm
      def Downloader(url, output):
          pydownloader = idm.Downloader(worker=20,
                                      part_size=1024*1024*10,
                                      resumable=True,)
      
          pydownloader .download(url, output)
      Downloader("Link url", "image.jpg")
      Downloader("Link url", "video.mp4")
      </pre>

      <strong>9. Get world news</strong>
      
      Use this automated script to stay updated on daily world news anytime, in any language from any country/region. This API allows you to get 50 news articles for free every day.
      <pre>
      # World News Fetcher
      # pip install requests
      import requests
      ApiKey = "YOUR_API_KEY"
      url = "https://api.worldnewsapi.com/search-news?text=hurricane&api-key={ApiKey}"
      headers = {
        'Accept': 'application/json'
      }
      response = requests.get(url, headers=headers)
      print("News: ", response.json())
      </pre>

      <strong>10. PySide2 GUI</strong>
      
      This automated script will help you create your GUI application using the PySide2 Gui module. You can find below every method needed to start developing the frontend of modern applications.
      <pre>
      # PySide 2 
      # pip install PySide2
      from PySide6.QtWidgets import *
      from PySide6.QtGui import *
      import sys
      app = QApplication(sys.argv)
      window = QWidget()
      # Resize the Window
      window.resize(500, 500)
      # Set the Window Title
      window.setWindowTitle("PySide2 Window")
      # Add Buttons
      button = QPushButton("Click Me", window)
      button.move(200, 200)
      # Add Label Text
      label = QLabel("Hello Medium", window)
      label.move(200, 150)
      # Add Input Box
      input_box = QLineEdit(window)
      input_box.move(200, 250)
      print(input_box.text())
      # Add Radio Buttons
      radio_button = QRadioButton("Radio Button", window)
      radio_button.move(200, 300)
      # Add Checkbox
      checkbox = QCheckBox("Checkbox", window)
      checkbox.move(200, 350)
      # Add Slider
      slider = QSlider(window)
      slider.move(200, 400)
      # Add Progress Bar
      progress_bar = QProgressBar(window)
      progress_bar.move(200, 450)
      # Add Image 
      image = QLabel(window)
      image.setPixmap(QPixmap("image.png"))
      # Add Message Box
      msg = QMessageBox(window)
      msg.setText("Message Box")
      msg.setStandardButtons(QMessageBox.Ok | QMessageBox.Cancel)
      window.show()
      sys.exit(app.exec())
      </pre>
      
            `,
      published: 'Apr 24,  2023',
      author: {
        name: 'Emmanuel Martin',
        img: '/images/author/author1.jpg',
        designation: 'Author',
      },
    },
  ],
};
